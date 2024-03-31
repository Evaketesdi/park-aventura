document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("animated-text");

  // Delay the animation for a few milliseconds
  setTimeout(function () {
    textElement.style.opacity = "1";
    textElement.style.transform = "translateY(0)";
  }, 500);
});
