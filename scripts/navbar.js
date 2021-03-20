const hamburgerButton = document.querySelector(".toggle-button");
const navLinks = document.querySelector(".nav-links");

hamburgerButton.addEventListener("click", () =>
  navLinks.classList.toggle("active")
);
