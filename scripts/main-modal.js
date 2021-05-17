function projectsModal(modalClass) {
    const modal = document.getElementById(modalClass);
    if(modal) {
        modal.classList.add('show');
        modal.addEventListener('click', (e) => {
            if(e.target.className == 'close') {
                modal.classList.remove('show');
            }
        });
    }
}

const snakeModal = document.querySelector('.snake');
snakeModal.addEventListener('click', () => projectsModal('snake-modal'));

const flixModal = document.querySelector('.finoflix');
flixModal.addEventListener('click', () => projectsModal('flix-modal'));

const mentalModal = document.querySelector('.mentalist');
mentalModal.addEventListener('click', () => projectsModal('mental-modal'));

const percentModal = document.querySelector('.reverse');
percentModal.addEventListener('click', () => projectsModal('percent-modal'));

const financesModal = document.querySelector('.finances');
financesModal.addEventListener('click', () => projectsModal('finances-modal'));