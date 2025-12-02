// Scroll Header Animation
(function () {
  "use strict";

  // Only run on about page (home page with permalink '/')
  const isAboutPage = window.location.pathname === "/" || window.location.pathname === "/index.html";
  if (!isAboutPage) {
    return;
  }

  let scrollTimeout;
  let nameAdded = false;
  const originalHeader = document.querySelector(".post-header");
  const navbar = document.querySelector("#navbar .container");

  if (!originalHeader || !navbar) return;

  // Get the original header position
  const headerTop = originalHeader.offsetTop;
  const headerHeight = originalHeader.offsetHeight;

  function handleScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // If scrolled past the header
    if (scrollPosition > headerTop + headerHeight) {
      if (!nameAdded) {
        // Check if navbar brand already exists (shouldn't on home page)
        let navbarBrand = navbar.querySelector(".navbar-brand");

        if (!navbarBrand) {
          // Create navbar brand with watermelon name
          navbarBrand = document.createElement("a");
          navbarBrand.className = "navbar-brand title font-weight-lighter watermelon-name-nav";
          navbarBrand.href = "/";

          // Clone the watermelon name content from the header
          const originalName = originalHeader.querySelector(".watermelon-name");
          if (originalName) {
            navbarBrand.innerHTML = originalName.innerHTML;
          }

          // Add fade-in animation
          navbarBrand.style.animation = "fadeIn 0.4s ease-out";

          // Insert at the beginning of navbar container
          navbar.insertBefore(navbarBrand, navbar.firstChild);
          nameAdded = true;
        }
      }
    } else {
      // Remove the name when scrolling back up
      if (nameAdded) {
        const navbarBrand = navbar.querySelector(".navbar-brand");
        if (navbarBrand) {
          navbarBrand.style.animation = "fadeOut 0.5s ease-in";
          setTimeout(() => {
            if (navbarBrand && navbarBrand.parentNode) {
              navbarBrand.parentNode.removeChild(navbarBrand);
              nameAdded = false;
            }
          }, 300);
        }
      }
    }
  }

  // Add animations
  const style = document.createElement("style");
  style.textContent = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes fadeOut {
      from {
        opacity: 1;
        transform: translateX(0);
      }
      to {
        opacity: 0;
        transform: translateX(-20px);
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
