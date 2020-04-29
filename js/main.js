const icon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

icon.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});