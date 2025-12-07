// Scroll Header Animation
(function () {
  "use strict";

  // Only run on about page (home page with permalink '/')
  const isAboutPage = window.location.pathname === "/" || window.location.pathname === "/index.html";
  if (!isAboutPage) {
    return;
  }

  let scrollTimeout;
  let logoAdded = false;
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
      if (!logoAdded) {
        // Check if scroll logo already exists
        let navbarLogo = navbar.querySelector(".navbar-brand.watermelon-scroll-logo");

        if (!navbarLogo) {
          navbarLogo = document.createElement("a");
          navbarLogo.className = "navbar-brand navbar-logo watermelon-scroll-logo";
          navbarLogo.href = "/";

          const logoIcon = document.createElement("span");
          logoIcon.className = "navbar-logo-icon";
          logoIcon.setAttribute("aria-hidden", "true");
          navbarLogo.appendChild(logoIcon);

          const logoImg = document.createElement("img");
          logoImg.className = "navbar-logo-img";
          logoImg.src = "/assets/img/favicon.png";
          logoImg.alt = "Site logo";
          logoImg.loading = "lazy";
          navbarLogo.appendChild(logoImg);

          navbarLogo.style.animation = "fadeIn 0.4s ease-out";

          navbar.insertBefore(navbarLogo, navbar.firstChild);
          logoAdded = true;
        }
      }
    } else {
      // Remove the logo when scrolling back up
      if (logoAdded) {
        const navbarLogo = navbar.querySelector(".navbar-brand.watermelon-scroll-logo");
        if (navbarLogo) {
          navbarLogo.style.animation = "fadeOut 0.5s ease-in";
          setTimeout(() => {
            if (navbarLogo && navbarLogo.parentNode) {
              navbarLogo.parentNode.removeChild(navbarLogo);
              logoAdded = false;
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
