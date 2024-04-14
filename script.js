document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("animated-text");

  setTimeout(function () {
    textElement.style.opacity = "1";
    textElement.style.transform = "translateY(0)";
  }, 1500);
});

const hamburgerMenu = document.getElementById("hamburger-menu");
const menuOverlay = document.getElementById("menu-overlay");

hamburgerMenu.addEventListener("click", function () {
  this.classList.toggle("active");
  menuOverlay.classList.toggle("active");

  if (this.classList.contains("active")) {
    this.parentNode.classList.add("no-shadow");
  } else {
    this.parentNode.classList.remove("no-shadow");
  }
});
