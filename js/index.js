const toggleBlock = document.querySelector('.toggle');
const TOGGLE_ITEM = 'toggle__item';

function chooseSlide(number) {
    showSlides(number)
}

function showSlides(number) {
    const slides = document.querySelectorAll('.card');
    const dots = document.querySelectorAll('.toggle__item');

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('card--active');
        dots[i].classList.remove('toggle__item--active');
    }

    slides[number-1].classList.add('card--active');
    dots[number-1].classList.add('toggle__item--active');
}

toggleBlock.onclick = function(e) {
    const target = e.target;
    if (target.className === TOGGLE_ITEM) {
        console.log(target.dataset.number)
        chooseSlide(target.dataset.number)
    }
}

showSlides(1);
