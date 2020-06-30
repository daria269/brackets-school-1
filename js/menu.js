const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn.onclick = function () {
    if(menuBtn.getAttribute('aria-expanded') === 'true') {
        menuBtn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('nav--active');
    } else {
        menuBtn.setAttribute('aria-expanded', 'true');
        nav.classList.add('nav--active');
    }
}
