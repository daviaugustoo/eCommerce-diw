const menuIcon = document.querySelector("nav img");
const menuList = document.querySelector("nav ul");

menuIcon.addEventListener("click", function() {
    menuList.classList.toggle("show-menu");
});