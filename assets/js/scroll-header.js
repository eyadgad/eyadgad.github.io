// Scroll Header Animation
(function () {
  "use strict";

  // Only run on about page
  if (!document.querySelector(".post-header .watermelon-name")) {
    return;
  }

  let scrollTimeout;
  let headerClone = null;
  const originalHeader = document.querySelector(".post-header");
  const navbar = document.querySelector("#navbar");

  if (!originalHeader) return;

  // Get the original header position
  const headerTop = originalHeader.offsetTop;
  const headerHeight = originalHeader.offsetHeight;

  function handleScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // If scrolled past the header
    if (scrollPosition > headerTop + headerHeight) {
      if (!headerClone) {
        // Create a clone of the header
        headerClone = originalHeader.cloneNode(true);
        headerClone.classList.add("scrolled-header");
        headerClone.style.position = "fixed";
        headerClone.style.top = navbar ? navbar.offsetHeight + "px" : "60px";
        headerClone.style.left = "0";
        headerClone.style.right = "0";
        headerClone.style.zIndex = "999";
        headerClone.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color");
        headerClone.style.padding = "1rem 2rem";
        headerClone.style.margin = "0";
        headerClone.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";

        // Adjust title size
        const title = headerClone.querySelector(".post-title");
        if (title) {
          title.style.fontSize = "1.5rem";
          title.style.margin = "0";
        }

        // Remove subtitle if exists
        const subtitle = headerClone.querySelector(".desc");
        if (subtitle) {
          subtitle.remove();
        }

        // Add animation
        headerClone.style.animation = "slideDown 0.4s ease-out";

        document.body.appendChild(headerClone);
      }
    } else {
      // Remove the clone when scrolling back up
      if (headerClone) {
        headerClone.style.animation = "slideUp 0.3s ease-in";
        setTimeout(() => {
          if (headerClone && headerClone.parentNode) {
            headerClone.parentNode.removeChild(headerClone);
            headerClone = null;
          }
        }, 300);
      }
    }
  }

  // Add slideUp animation
  const style = document.createElement("style");
  style.textContent = `
    @keyframes slideDown {
      from {
        transform: translateY(-100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    @keyframes slideUp {
      from {
        transform: translateY(0);
        opacity: 1;
      }
      to {
        transform: translateY(-100%);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Listen to scroll events with throttling
  window.addEventListener(
    "scroll",
    function () {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(handleScroll, 10);
    },
    { passive: true }
  );

  // Initial check
  handleScroll();
})();
