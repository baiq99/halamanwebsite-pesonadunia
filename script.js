document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");
  const logo = document.getElementById("logo");
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navContainer = document.querySelector(".nav-container");
  const offset = 95; 

  // Function to scroll to top of the page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  scrollToTop();

  // Function to remove active class from all nav items
  function removeActiveClass() {
    navItems.forEach(item => {
      item.classList.remove("nav-item-active");
    });
  }

  // Set Home as active when page loads
  const homeItem = document.querySelector('.nav-item[data-section="home"]');
  if (homeItem) {
    homeItem.classList.add("nav-item-active");
  }

  // Add click event listeners to nav items
  navItems.forEach(item => {
    item.addEventListener("click", function () {
      const sectionId = this.getAttribute("data-section");

      removeActiveClass();
      
      this.classList.add("nav-item-active");

      if (sectionId === "home") {
        scrollToTop();
      } else if (sectionId === "about-us") {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth"
        });
      } else {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionPosition = section.offsetTop - offset;
          window.scrollTo({
            top: sectionPosition,
            behavior: "smooth"
          });
        }
      }

      if (window.innerWidth <= 768) {
        navContainer.classList.remove("active");
      }
    });
  });

  // Add click event listener to logo
  logo.addEventListener("click", function () {
    scrollToTop();
    removeActiveClass(); // Remove active class from all nav items
    homeItem.classList.add("nav-item-active"); // Set Home as active
  });

  // Add click event listener to hamburger menu
  hamburgerMenu.addEventListener("click", function () {
    navContainer.classList.toggle("active");
  });
});
