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
    const leftEdge = 10; // Left straight edge of D
    const centerX = leftEdge; // Center point for semicircle
    const centerY = 50;
    const outerRadius = 45; // Outer radius of D shape

    // Calculate layer widths based on ratios (from right to left)
    const totalWidth = outerRadius; // Available width for layers
    const greenWidth = totalWidth * ratios.green;
    const whiteWidth = totalWidth * ratios.white;
    const redWidth = totalWidth * ratios.red;

    // Calculate radii for each layer
    const outerR = leftEdge + outerRadius;
    const whiteR = outerR - greenWidth;
    const redR = whiteR - whiteWidth;

    let svg = "";

    // Green layer (outermost, right border)
    svg += `<path d="M ${centerX} ${centerY - outerRadius} 
                     A ${outerRadius} ${outerRadius} 0 0 1 ${centerX} ${centerY + outerRadius}
                     L ${centerX} ${centerY + whiteR - leftEdge}
                     A ${whiteR - leftEdge} ${whiteR - leftEdge} 0 0 0 ${centerX} ${centerY - (whiteR - leftEdge)}
                     Z" fill="#16a34a"/>`;

    // White layer (middle)
    svg += `<path d="M ${centerX} ${centerY - (whiteR - leftEdge)}
                     A ${whiteR - leftEdge} ${whiteR - leftEdge} 0 0 1 ${centerX} ${centerY + (whiteR - leftEdge)}
                     L ${centerX} ${centerY + (redR - leftEdge)}
                     A ${redR - leftEdge} ${redR - leftEdge} 0 0 0 ${centerX} ${centerY - (redR - leftEdge)}
                     Z" fill="#fefce8"/>`;

    // Red layer (innermost, with seeds)
    svg += `<path d="M ${centerX} ${centerY - (redR - leftEdge)}
                     A ${redR - leftEdge} ${redR - leftEdge} 0 0 1 ${centerX} ${centerY + (redR - leftEdge)}
                     L ${centerX} ${centerY + (redR - leftEdge)}
                     A ${redR - leftEdge} ${redR - leftEdge} 0 0 0 ${centerX} ${centerY - (redR - leftEdge)}
                     Z" fill="#f97373"/>`;

    // Add the straight left edge
    svg += `<rect x="0" y="5" width="${leftEdge}" height="90" fill="#f97373"/>`;

    // Add seeds in the red curved area
    const seedRadius = redR - leftEdge - 5; // Keep seeds inside red area
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
      const distance = seedRadius * seed.dist;
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
