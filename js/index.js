const toggleBlock = document.querySelector('.toggle');
const TOGGLE_ITEM = 'toggle__item';
const feedbackToggleBlock = document.querySelector('.users-switch');
const FEEDBACK_TOGGLE_ITEM = 'users-switch__btn';
const defaultSlideNumber = 1;

//слайдер для учебных проектов
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
        showSlides(target.dataset.number)
    }
}

showSlides(defaultSlideNumber);

//слайдер для отзывов
function showFeedbackSlide (number) {
    const slides = document.querySelectorAll('.feedback-card');
    const toggles = document.querySelectorAll('.users-switch__btn');
    const triangle = document.querySelector('.users-switch__triangle');
    const defaultTriangleMovementVal = 65;

    triangle.style.left = defaultTriangleMovementVal * number + 'px';

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('feedback-card--active');
        toggles[i].classList.remove('users-switch__btn--active');
    }

    slides[number-1].classList.add('feedback-card--active');
    toggles[number-1].classList.add('users-switch__btn--active');
}

showFeedbackSlide(defaultSlideNumber);

feedbackToggleBlock.onclick = function(e) {
    const target = e.target;
    if (target.className === FEEDBACK_TOGGLE_ITEM) {
        showFeedbackSlide(target.dataset.userNumber)
    }
}
