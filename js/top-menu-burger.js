let burgerBtn = document.getElementsByClassName("burger-menu")[0];
let bodyTag = document.getElementsByTagName("body")[0];
let navBar = document.getElementsByClassName("navbar_menu_top")[0];

burgerBtn.addEventListener('click', function () {
    burgerBtn.classList.toggle("active-btn");
    bodyTag.classList.toggle("body-overflow");
    navBar.classList.toggle("active-btn");
})

