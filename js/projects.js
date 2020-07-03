const toggleBlock = document.querySelector('.toggle');
const projectsToggles = document.querySelectorAll('.toggle__item');

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
