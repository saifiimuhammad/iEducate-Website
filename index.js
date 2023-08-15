let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let leftNavbar = document.querySelector('.left-navbar');
let rightNavbar = document.querySelector('.right-navbar');




burger.addEventListener('click', () => {

    leftNavbar.classList.toggle('v-class');
    rightNavbar.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');

})