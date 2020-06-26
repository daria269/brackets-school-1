const toggleBlock = document.querySelector('.toggle');
const TOGGLE_ITEM = 'toggle__item';
const feedbackToggleBlock = document.querySelector('.users-switch');
const FEEDBACK_TOGGLE_ITEM = 'users-switch__btn';

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
        chooseSlide(target.dataset.number)
    }
}

showSlides(1);

function chooseFeedbackSlide(number) {
    showFeedbackSlide(number);
}

function showFeedbackSlide (number) {
    const slides = document.querySelectorAll('.feedback-card');
    const toggles = document.querySelectorAll('.users-switch__btn');
    const triangle = document.createElement('span');
    triangle.classList.add('users-switch__triangle');
    const triangleClass = document.querySelector('.users-switch__triangle');
    toggles[number-1].children[0].innerHTML='';

    triangleClass.parentElement.removeChild(triangleClass);

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('feedback-card--active');
        toggles[i].classList.remove('users-switch__btn--active');
    }

    

    slides[number-1].classList.add('feedback-card--active');
    toggles[number-1].classList.add('users-switch__btn--active');
    toggles[number-1].append(triangle);
}

showFeedbackSlide(1);

feedbackToggleBlock.onclick = function(e) {
    const target = e.target;
    if (target.parentNode.className === FEEDBACK_TOGGLE_ITEM) {
        chooseFeedbackSlide(target.parentNode.dataset.userNumber)
    }
}
