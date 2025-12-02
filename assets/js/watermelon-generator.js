// Watermelon SVG Generator - Dynamically creates watermelons based on CSS variables
(function () {
  "use strict";

  // Get CSS variables for proportions
  const root = document.documentElement;
  const redRatio = parseFloat(getComputedStyle(root).getPropertyValue("--watermelon-red-ratio")) || 80;
  const whiteRatio = parseFloat(getComputedStyle(root).getPropertyValue("--watermelon-white-ratio")) || 12;
  const greenRatio = parseFloat(getComputedStyle(root).getPropertyValue("--watermelon-green-ratio")) || 8;

  // Calculate coordinates based on ratios
  const viewBoxHeight = 100;
  const startY = 10; // Top of triangle
  const totalHeight = viewBoxHeight - startY; // 90 units available

  // Calculate layer boundaries
  const redHeight = (redRatio / 100) * totalHeight;
  const whiteHeight = (whiteRatio / 100) * totalHeight;
  const greenHeight = (greenRatio / 100) * totalHeight;

  const redEnd = startY + redHeight;
  const whiteEnd = redEnd + whiteHeight;
  const greenEnd = whiteEnd + greenHeight;

  // Calculate horizontal positions for trapezoid effect
  const baseWidth = 100;
  const topX = 50;
  const redLeftX = ((viewBoxHeight - redEnd) / viewBoxHeight) * (baseWidth / 2);
  const redRightX = baseWidth - redLeftX;
  const whiteLeftX = ((viewBoxHeight - whiteEnd) / viewBoxHeight) * (baseWidth / 2);
  const whiteRightX = baseWidth - whiteLeftX;

  // Generate SVG content
  function generateWatermelonSVG() {
    return `
      <polygon points="${topX},${startY} ${redLeftX},${redEnd} ${redRightX},${redEnd}" fill="#f97373"/>
      <path d="M ${redLeftX} ${redEnd} L ${whiteLeftX} ${whiteEnd} L ${whiteRightX} ${whiteEnd} L ${redRightX} ${redEnd} Z" fill="#fefce8"/>
      <path d="M ${whiteLeftX} ${whiteEnd} L 0 ${greenEnd} L ${baseWidth} ${greenEnd} L ${whiteRightX} ${whiteEnd} Z" fill="#16a34a"/>
      <ellipse cx="50" cy="${startY + redHeight * 0.375}" rx="3" ry="7" fill="#111827"/>
      <ellipse cx="37" cy="${startY + redHeight * 0.5625}" rx="3" ry="7" fill="#111827" transform="rotate(-15 37 ${startY + redHeight * 0.5625})"/>
      <ellipse cx="63" cy="${startY + redHeight * 0.5625}" rx="3" ry="7" fill="#111827" transform="rotate(15 63 ${startY + redHeight * 0.5625})"/>
      <ellipse cx="30" cy="${startY + redHeight * 0.75}" rx="3" ry="7" fill="#111827" transform="rotate(-20 30 ${startY + redHeight * 0.75})"/>
      <ellipse cx="50" cy="${startY + redHeight * 0.6875}" rx="3" ry="7" fill="#111827" transform="rotate(10 50 ${startY + redHeight * 0.6875})"/>
      <ellipse cx="70" cy="${startY + redHeight * 0.75}" rx="3" ry="7" fill="#111827" transform="rotate(20 70 ${startY + redHeight * 0.75})"/>
      <ellipse cx="42" cy="${startY + redHeight * 0.475}" rx="2.5" ry="6" fill="#111827" transform="rotate(-25 42 ${startY + redHeight * 0.475})"/>
      <ellipse cx="58" cy="${startY + redHeight * 0.475}" rx="2.5" ry="6" fill="#111827" transform="rotate(25 58 ${startY + redHeight * 0.475})"/>
      <ellipse cx="45" cy="${startY + redHeight * 0.85}" rx="3" ry="6" fill="#111827" transform="rotate(-10 45 ${startY + redHeight * 0.85})"/>
      <ellipse cx="55" cy="${startY + redHeight * 0.85}" rx="3" ry="6" fill="#111827" transform="rotate(10 55 ${startY + redHeight * 0.85})"/>
    `;
  }

  // Update all watermelon SVGs on the page
  function updateWatermelons() {
    const watermelons = document.querySelectorAll(".watermelon-a");
    const svgContent = generateWatermelonSVG();

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
