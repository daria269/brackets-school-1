const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', function () {
    menuBtn.setAttribute('aria-expanded', menuBtn.getAttribute('aria-expanded') === "true" ? "false" : "true");
    nav.classList.toggle('nav--active');
});
