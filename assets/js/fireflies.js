// Fireflies positioning and random movement
(function () {
  "use strict";

  const MAX_FIREFLIES = 5;

  function ensureFireflies() {
    const container = document.querySelector(".fireflies-container");
    if (!container) return [];

    let nodes = Array.from(container.querySelectorAll(".firefly"));

    if (nodes.length > MAX_FIREFLIES) {
      nodes.slice(MAX_FIREFLIES).forEach((node) => node.remove());
      nodes = nodes.slice(0, MAX_FIREFLIES);
    } else {
      while (nodes.length < MAX_FIREFLIES) {
        const node = document.createElement("div");
        node.className = "firefly";
        container.appendChild(node);
        nodes.push(node);
      }
    }

    return nodes;
  }

  function getAnchorCenter() {
    const anchor = document.querySelector(".profile img, .author__avatar img, .avatar img, .about img");
    if (anchor) {
      const rect = anchor.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    }
    return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  }

  function positionFireflies() {
    const fireflies = ensureFireflies();

    if (fireflies.length === 0) return;

    const { x: centerX, y: centerY } = getAnchorCenter();

    fireflies.forEach((firefly) => {
      firefly.style.left = `${centerX}px`;
      firefly.style.top = `${centerY}px`;

      const randomX = (Math.random() - 0.5) * 400; // -200 to 200
      const randomDirection = Math.random() > 0.5 ? 1 : -1;

      firefly.style.setProperty("--firefly-x-offset", `${randomX}px`);
      firefly.style.setProperty("--firefly-direction", randomDirection);
    });
  }

  // Position on load and when profile image finishes loading
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", positionFireflies);
  } else {
    positionFireflies();
  }

  window.addEventListener("load", positionFireflies);

  // Reposition on window resize
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(positionFireflies, 100);
  });

  // Reposition on scroll (since profile might move)
  let scrollTimeout;
  window.addEventListener(
    "scroll",
    () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(positionFireflies, 50);
    },
    { passive: true }
  );
})();
