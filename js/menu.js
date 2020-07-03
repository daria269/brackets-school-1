const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', function () {
    menuBtn.toggleAttribute('aria-expanded');
    nav.classList.toggle('nav--active');
});
