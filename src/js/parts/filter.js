const filter = document.querySelector('.filter');
const filterOpenButton = document.querySelector('.filter__button');
const filterCloseButton = document.querySelector('.filter__close');


// open filter
if (filterOpenButton) {
    filterOpenButton.addEventListener('click', (е) => {
        filter.classList.add('_open');
    })
}

// close filter
if (filterCloseButton) {
    filterCloseButton.addEventListener('click', (е) => {
        filter.classList.remove('_open');
    })
}