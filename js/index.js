const programBlock = document.querySelector('.program');


function doAccordion(number) {
    const descriptionDefenitions = document.querySelectorAll('.program__dd');

    for (let i = 0; i < descriptionDefenitions.length; i++) {
        if (descriptionDefenitions[i].classList.contains('program__dd--active')) {
            descriptionDefenitions[i].classList.remove('program__dd--active');
        }
    }

    descriptionDefenitions[number-1].classList.add('program__dd--active');
}

programBlock.onclick = function(e) {
    if (e.target.classList.contains('program__link')) {
        doAccordion(e.target.parentNode.dataset.accordionNumber);
    }
}
