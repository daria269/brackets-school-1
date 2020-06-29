const menuBtn = document.querySelector('.menu-btn');

menuBtn.onclick = function () {
    const nav = document.querySelector('.nav');
    if(menuBtn.getAttribute('aria-expanded') === 'true') {
        menuBtn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('nav--active');
    } else {
        menuBtn.setAttribute('aria-expanded', 'true');
        nav.classList.add('nav--active');
    }
}
