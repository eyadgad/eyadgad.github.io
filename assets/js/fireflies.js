// Fireflies positioning and random movement
(function () {
  "use strict";

  function positionFireflies() {
    const profileImg = document.querySelector(".profile img");
    const fireflies = document.querySelectorAll(".firefly");

    if (!profileImg || fireflies.length === 0) return;

    // Get profile image center position
    const rect = profileImg.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Position fireflies at profile center and set random movement
    fireflies.forEach((firefly, index) => {
      // Set starting position to profile center
      firefly.style.left = `${centerX}px`;
      firefly.style.top = `${centerY}px`;

      // Generate random horizontal offset (-200px to 200px)
      const randomX = (Math.random() - 0.5) * 400;

      // Random direction: 1 for up, -1 for down
      const randomDirection = Math.random() > 0.5 ? 1 : -1;

      // Set CSS variables for this specific firefly
      firefly.style.setProperty("--firefly-x-offset", `${randomX}px`);
      firefly.style.setProperty("--firefly-direction", randomDirection);
    });
  }

  // Position on load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", positionFireflies);
  } else {
    positionFireflies();
  }

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
