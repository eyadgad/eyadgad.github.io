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

    // D-shape parameters - full letter D shape
    const viewBoxWidth = 100;
    const viewBoxHeight = 100;
    const leftBarWidth = 15; // Width of the left vertical bar of D
    const centerX = leftBarWidth; // Center of the semicircle
    const centerY = 50;
    const outerRadius = 50; // Radius to reach edge of viewBox
    
    // Calculate layer positions on left bar based on ratios
    const greenWidth = leftBarWidth * ratios.green;
    const whiteWidth = leftBarWidth * ratios.white;
    // Red takes the rest

    let svg = "";

    // Red semicircle (right curved side with seeds) - full D curve
    svg += `<path d="M ${leftBarWidth} 0 
                     A ${outerRadius} ${centerY} 0 0 1 ${leftBarWidth} ${viewBoxHeight}
                     L ${leftBarWidth} 0 Z" fill="#f97373"/>`;

    // Red rectangle for left bar (behind the layers)
    svg += `<rect x="0" y="0" width="${leftBarWidth}" height="${viewBoxHeight}" fill="#f97373"/>`;

    // Green layer (leftmost on straight edge)
    svg += `<rect x="0" y="0" width="${greenWidth}" height="${viewBoxHeight}" fill="#16a34a"/>`;

    // White layer (between green and red on straight edge)
    svg += `<rect x="${greenWidth}" y="0" width="${whiteWidth}" height="${viewBoxHeight}" fill="#fefce8"/>`;

    // Add seeds in the red semicircle area
    const seeds = [
      { angle: -60, dist: 0.4, rx: 2, ry: 4, rotate: -15 },
      { angle: -40, dist: 0.6, rx: 2, ry: 4, rotate: 10 },
      { angle: -20, dist: 0.5, rx: 2, ry: 4, rotate: -20 },
      { angle: 0, dist: 0.65, rx: 2.5, ry: 5, rotate: 0 },
      { angle: 20, dist: 0.5, rx: 2, ry: 4, rotate: 15 },
      { angle: 40, dist: 0.6, rx: 2, ry: 4, rotate: -10 },
      { angle: 60, dist: 0.4, rx: 2, ry: 4, rotate: 5 },
      { angle: -50, dist: 0.5, rx: 2, ry: 4, rotate: -25 },
      { angle: 10, dist: 0.7, rx: 2, ry: 4, rotate: 12 },
      { angle: 50, dist: 0.55, rx: 2, ry: 4, rotate: -8 },
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
