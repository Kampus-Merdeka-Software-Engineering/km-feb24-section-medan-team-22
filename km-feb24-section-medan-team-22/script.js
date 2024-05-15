const menuToogle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.navbar .menu');

menuToogle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});