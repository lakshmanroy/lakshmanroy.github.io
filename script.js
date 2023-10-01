// Toggle the mobile menu
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Toggle dark mode
const darkModeIcon = document.getElementById("darkmode");

darkModeIcon.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Change color after clicking on icon
const socialIcons = document.querySelectorAll(".social i");

socialIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const colors = ["#ff6f61", "#6b5b95", "#feb236"]; // Define your desired colors here
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    icon.style.color = randomColor;
  });
});