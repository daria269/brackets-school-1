const accordion = document.querySelector('.accordion');
accordion.addEventListener('click', e => {
    e.preventDefault();
    const target = e.target;
    if(target.classList.contains('accordion__trigger')) {

        const isExpanded = target.getAttribute('aria-expanded') == 'true';
        const active = accordion.querySelector('[aria-expanded="true"]');

        if(active && active !== target) {
            active.setAttribute('aria-expanded', 'false');
            document.getElementById(active.getAttribute('aria-controls')).setAttribute('hidden', 'true');
        }

        if(!isExpanded) {
            target.setAttribute('aria-expanded', 'true');
            document.getElementById(target.getAttribute('aria-controls')).removeAttribute('hidden');
        }
    }
})
