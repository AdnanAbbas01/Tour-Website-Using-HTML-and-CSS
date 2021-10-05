const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const whiteCircle = document.querySelector('.white-circle');
const cardButton = document.querySelectorAll('.cards-button');
const modalOverlay = document.querySelector('.card-modal-overlay');
const cancel = document.querySelector('.cancel');

let visible = false;
let modalVisible = false;

whiteCircle.addEventListener('click',()=>{
    if(!visible){
        line1.classList.add('rotateP');
        line2.classList.add('rotateN');
        line3.classList.add('line3Hide');
        visible = true;
    }

    else if(visible){
        line1.classList.remove('rotateP');
        line2.classList.remove('rotateN');
        line3.classList.remove('line3Hide');
        visible = false;
    }
})

cardButton.forEach((button) => {
button.addEventListener('click', ()=>{
     if(!modalVisible){
         modalOverlay.classList.add('modal-visible');
         modalVisible = true;
     }
})
})

cancel.addEventListener('click', ()=>{
    modalOverlay.classList.remove('modal-visible');
    modalVisible = false;
})