// load-nav.js

document.addEventListener("DOMContentLoaded", function () {
  // Fetch the navigation HTML
  fetch("nav.html")
    .then((response) => response.text())
    .then((data) => {
      // Insert the nav into the sidebar placeholder
      document.getElementById("sidebar").innerHTML = data;

      // Optional: highlight the active page
      const links = document.querySelectorAll(".rocket-button");
      links.forEach((link) => {
        if (link.href === window.location.href) {
          link.classList.add("active");
        }
      });
    })
    .catch((err) => console.error("Failed to load navigation:", err));
});
