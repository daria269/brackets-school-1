const feedbackToggleBlock = document.querySelector('.users-switch');
const feedbackToggles = document.querySelectorAll('.users-switch__btn');

const defaultSlideNumber = 1;

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
