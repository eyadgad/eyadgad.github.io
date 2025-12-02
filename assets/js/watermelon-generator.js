// Watermelon D-shape Generator - Dynamically creates D-shaped watermelons based on CSS variables
(function () {
  "use strict";

  // Get CSS variables for proportions
  const root = document.documentElement;

  function getWatermelonRatios() {
    const redRatio = parseFloat(getComputedStyle(root).getPropertyValue("--watermelon-red-ratio")) || 80;
    const whiteRatio = parseFloat(getComputedStyle(root).getPropertyValue("--watermelon-white-ratio")) || 12;
    const greenRatio = parseFloat(getComputedStyle(root).getPropertyValue("--watermelon-green-ratio")) || 8;

    const total = redRatio + whiteRatio + greenRatio;
    return {
      red: redRatio / total,
      white: whiteRatio / total,
      green: greenRatio / total,
    };
  }

  // Generate SVG content for D-shaped watermelon
  function generateWatermelonD() {
    const ratios = getWatermelonRatios();

    // D-shape parameters
    const viewBoxWidth = 100;
    const viewBoxHeight = 100;
    const leftEdge = 10; // Left straight edge of D (where green/white layers are)
    const centerX = leftEdge; // Center point for semicircle
    const centerY = 50;
    const outerRadius = 45; // Outer radius of D shape

    // Calculate layer widths based on ratios (from left to right on straight edge)
    const totalWidth = leftEdge; // Available width for green/white layers
    const greenWidth = totalWidth * ratios.green;
    const whiteWidth = totalWidth * ratios.white;

    let svg = "";

    // Red semicircle (right curved side with seeds)
    svg += `<path d="M ${leftEdge} ${centerY - outerRadius} 
                     A ${outerRadius} ${outerRadius} 0 0 1 ${leftEdge} ${centerY + outerRadius}
                     L ${leftEdge} ${centerY + outerRadius}
                     A ${outerRadius} ${outerRadius} 0 0 0 ${leftEdge} ${centerY - outerRadius}
                     Z" fill="#f97373"/>`;

    // Green layer (leftmost on straight edge)
    svg += `<rect x="0" y="5" width="${greenWidth}" height="90" fill="#16a34a"/>`;

    // White layer (middle on straight edge)
    svg += `<rect x="${greenWidth}" y="5" width="${whiteWidth}" height="90" fill="#fefce8"/>`;

    // Add seeds in the red semicircle area
    const seeds = [
      { angle: 20, dist: 0.3, rx: 2, ry: 4, rotate: -15 },
      { angle: 40, dist: 0.5, rx: 2, ry: 4, rotate: 10 },
      { angle: 60, dist: 0.35, rx: 2, ry: 4, rotate: -20 },
      { angle: 80, dist: 0.55, rx: 2, ry: 4, rotate: 15 },
      { angle: 100, dist: 0.4, rx: 2, ry: 4, rotate: -10 },
      { angle: 120, dist: 0.5, rx: 2, ry: 4, rotate: 5 },
      { angle: 140, dist: 0.45, rx: 2, ry: 4, rotate: -25 },
      { angle: 160, dist: 0.35, rx: 2, ry: 4, rotate: 12 },
      { angle: 50, dist: 0.65, rx: 2, ry: 4, rotate: -8 },
      { angle: 110, dist: 0.6, rx: 2, ry: 4, rotate: 0 },
    ];

    seeds.forEach((seed) => {
      const angleRad = (seed.angle * Math.PI) / 180;
      const distance = outerRadius * seed.dist;
      const cx = centerX + distance * Math.cos(angleRad);
      const cy = centerY + distance * Math.sin(angleRad);
      svg += `<ellipse cx="${cx}" cy="${cy}" rx="${seed.rx}" ry="${seed.ry}" fill="#111827" transform="rotate(${seed.rotate} ${cx} ${cy})"/>`;
    });

    return svg;
  }

  // Update all watermelon SVGs on the page
  function updateWatermelons() {
    const watermelons = document.querySelectorAll(".watermelon-d");
    const svgContent = generateWatermelonD();

    watermelons.forEach((svg) => {
      svg.innerHTML = svgContent;
    });
  }

  // Run on page load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateWatermelons);
  } else {
    updateWatermelons();
  }

  // Export for debugging
  window.updateWatermelons = updateWatermelons;
})();
