const toggleBlock = document.querySelector('.toggle');
const feedbackToggleBlock = document.querySelector('.users-switch');
const feedbackToggles = document.querySelectorAll('.users-switch__btn');
const projectsToggles = document.querySelectorAll('.toggle__item');

const defaultSlideNumber = 1;

//слайдер для учебных проектов
function showSlides(number) {
    const slides = document.querySelectorAll('.card');

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('card--active');
        projectsToggles[i].classList.remove('toggle__item--active');
    }

    slides[number - 1].classList.add('card--active');
    projectsToggles[number - 1].classList.add('toggle__item--active');
}

for(let i = 0; i < projectsToggles.length; i++) {
    projectsToggles[i].addEventListener('click', function() {
        showSlides(i + 1);
    })
}

showSlides(defaultSlideNumber);


//слайдер для отзывов
function showFeedbackSlide (number) {
    const slides = document.querySelectorAll('.feedback-card');
    const triangle = document.querySelector('.users-switch__triangle');
    const defaultTriangleMovementVal = 65;

    triangle.style.left = defaultTriangleMovementVal * number + 'px';

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('feedback-card--active');
        feedbackToggles[i].classList.remove('users-switch__btn--active');
    }

    slides[number - 1].classList.add('feedback-card--active');
    feedbackToggles[number - 1].classList.add('users-switch__btn--active');
}

showFeedbackSlide(defaultSlideNumber);

for(let i = 0; i < feedbackToggles.length; i++) {
    feedbackToggles[i].addEventListener('click', function() {
        showFeedbackSlide(i + 1);
    })
}
