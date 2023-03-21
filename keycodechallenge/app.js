const displayKey = document.querySelector('.key h2');
const displayKeyCode = document.querySelector('.keyCode h2');
const displayKeyWhich = document.querySelector('.keyWhich h2');

const keyCodeDiv = document.querySelector('.keyCode');
const overlay = document.querySelector('.overlay');
// const header = document.querySelector('bgText');

window.addEventListener('keydown' , (e) =>{
//    header.classList.add('hide');
    overlay.classList.add('hide');
    // header.classList.remove('hide');
    displayKey.innerText = e.key;
    displayKeyWhich.innerText= e.keyCode;
    displayKeyCode.innerText = e.code;
    if(e.keyCode === 32){
        displayKey.innerText = `'space'`;
    }
    
})