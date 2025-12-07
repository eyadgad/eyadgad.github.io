// Watermelon SVG Generator - D-shaped watermelons
(function () {
  "use strict";

  // Generate SVG content for D-shaped watermelon and return metadata for animations
  // Total width: 100px, height: 73px (to match letter line-height)
  // Left side: green (8%) + white (10%) + red (14%) = 32%
  // Right side: semicircle with radius 50px
  function createWatermelonData() {
    const greenWidth = 8;
    const whiteWidth = 10;
    const redRectWidth = 14;
    const leftSideWidth = greenWidth + whiteWidth + redRectWidth; // 32
    const radius = 50;
    const height = 73;
    const cornerRadius = 2; // Rounded corners for smooth edges

    // Advanced seed distribution with collision detection
    const seeds = [];
    const seedCount = 6;
    const centerX = leftSideWidth;
    const centerY = height / 2;
    const seedMargin = 8; // Distance from rind and curve
    const minSeedDistance = 7; // Minimum spacing between seeds

    // Generate seeds with proper spacing
    let attempts = 0;
    const maxAttempts = 100;

    while (seeds.length < seedCount && attempts < maxAttempts) {
      attempts++;

      const maxRadius = radius - seedMargin;
      const candidateX = greenWidth + whiteWidth + seedMargin + Math.random() * (redRectWidth + radius - seedMargin * 2);
      const candidateY = seedMargin + Math.random() * (height - seedMargin * 2);

      const dxCenter = candidateX - centerX;
      const dyCenter = candidateY - centerY;
      const distanceFromCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);

      const inRedRectangle = candidateX <= leftSideWidth - seedMargin;
      const inRedSemicircle = candidateX >= leftSideWidth && dxCenter >= 0 && distanceFromCenter <= maxRadius;

      if (!inRedRectangle && !inRedSemicircle) {
        continue;
      }

      let validPosition = true;
      for (const seed of seeds) {
        const dx = candidateX - seed.x;
        const dy = candidateY - seed.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < minSeedDistance) {
          validPosition = false;
          break;
        }
      }

      if (!validPosition) {
        continue;
      }

      const angle = Math.atan2(dyCenter, dxCenter);
      seeds.push({ x: candidateX, y: candidateY, angle });
    }

    // Generate seed SVG elements with proper rotation and indexes
    let seedsHTML = "";
    seeds.forEach((seed, index) => {
      const rotation = (seed.angle * 180) / Math.PI + 90;
      seedsHTML += `<ellipse data-seed-index="${index}" cx="${seed.x}" cy="${seed.y}" rx="1.8" ry="4" fill="#111827" transform="rotate(${rotation} ${seed.x} ${seed.y})"/>`;
    });

    const markup = `
      <rect x="0" y="0" width="${greenWidth}" height="${height}" fill="#16a34a" rx="${cornerRadius}"/>
      <rect x="${greenWidth}" y="0" width="${whiteWidth}" height="${height}" fill="#fefce8"/>
      <rect x="${greenWidth + whiteWidth}" y="0" width="${redRectWidth}" height="${height}" fill="#f97373"/>
      <path d="M ${leftSideWidth} 0 A ${radius} ${radius} 0 0 1 ${leftSideWidth} ${height} Z" fill="#f97373"/>
      ${seedsHTML}
    `;

    const config = {
      greenWidth,
      whiteWidth,
      redRectWidth,
      leftSideWidth,
      radius,
      height,
      seedMargin,
      seeds,
    };

    return { markup, config };
  }

  function isInsideRedArea(x, y, config) {
    const { greenWidth, whiteWidth, leftSideWidth, height, radius, seedMargin } = config;
    const rectStart = greenWidth + whiteWidth + seedMargin;
    const rectEnd = leftSideWidth - seedMargin;
    const withinRect = x >= rectStart && x <= rectEnd && y >= seedMargin && y <= height - seedMargin;

    const dx = x - leftSideWidth;
    const dy = y - height / 2;
    const withinSemi =
      x >= leftSideWidth && dx >= 0 && dx * dx + dy * dy <= Math.pow(radius - seedMargin, 2) && y >= seedMargin && y <= height - seedMargin;

    return withinRect || withinSemi;
  }

  function animateSeeds(svg, config) {
    const seedNodes = Array.from(svg.querySelectorAll("ellipse[data-seed-index]"));
    if (!seedNodes.length) {
      return;
    }

    const seeds = seedNodes.map((node, index) => {
      const base = config.seeds[index];
      return {
        node,
        x: base.x,
        y: base.y,
        angle: base.angle,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      };
    });

    function step() {
      seeds.forEach((seed) => {
        let nextX = seed.x + seed.vx;
        let nextY = seed.y + seed.vy;

        if (!isInsideRedArea(nextX, nextY, config)) {
          seed.vx = -seed.vx;
          seed.vy = -seed.vy;
          nextX = seed.x + seed.vx;
          nextY = seed.y + seed.vy;

          if (!isInsideRedArea(nextX, nextY, config)) {
            nextX = seed.x;
            nextY = seed.y;
          }
        }

        seed.x = nextX;
        seed.y = nextY;
        seed.node.setAttribute("cx", seed.x);
        seed.node.setAttribute("cy", seed.y);
      });

      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  // Update all watermelon SVGs on the page
  function updateWatermelons() {
    const watermelons = document.querySelectorAll(".watermelon-d");

    watermelons.forEach((watermelon) => {
      // Clear existing content
      watermelon.innerHTML = "";

      // Create SVG element
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 100 90");
      svg.setAttribute("preserveAspectRatio", "none");
      svg.setAttribute("role", "img");
      svg.setAttribute("aria-label", "D");

      // Add the watermelon content
      const { markup, config } = createWatermelonData();
      svg.innerHTML = markup;

      watermelon.appendChild(svg);
      animateSeeds(svg, config);
    });
  }

  // Run on page load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateWatermelons);
  } else {
    updateWatermelons();
  }

  // Also run after a short delay to ensure everything is loaded
  setTimeout(updateWatermelons, 100);

  // Export for debugging
  window.updateWatermelons = updateWatermelons;
})();
