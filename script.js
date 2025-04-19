const header = document.querySelector(".header");
const burger = document.querySelector(".burger-menu");
const burgerIcon = document.querySelector(".burger-menu__icon");
const nav = document.querySelector(".header__nav");

burger.addEventListener("click", function() {

    nav.classList.toggle("active");
    

    if (nav.classList.contains("active")) {
        burgerIcon.src = "./images/icons8-удалить.svg";
    } else {
        burgerIcon.src = "./images/icons8-меню.svg";
    }
});