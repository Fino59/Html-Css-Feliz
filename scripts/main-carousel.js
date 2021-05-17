
const arrowLeft = document.querySelector('.button-arrow.-left');
const arrowRight = document.querySelector('.button-arrow.-right');
const elements = document.querySelector('.elements');
let move = 100;

arrowLeft.addEventListener('click', function() {
    move = move - 100;
    elements.style = `transform: translateX(${move}px)`;
})

arrowRight.addEventListener('click', function(){
    move = move + 100;
    elements.style = `transform: translateX(${move}px)`;
})

