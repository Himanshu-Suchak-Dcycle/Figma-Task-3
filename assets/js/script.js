document.addEventListener("DOMContentLoaded", function () {
  let navLinks = document.querySelectorAll(".nav-link");
  let navbarToggler = document.querySelector(".navbar-toggler");
  let navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth < 992) {
        // Use Bootstrap's built-in collapse functionality
        let bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide(); // Smoothly collapse the navbar
      }
    });
  });
});
