
let cube = document.querySelector('.cube');
let rollBtn = document.querySelector('.rollBtn');
let currentClass = '';
let start = document.querySelector('.start');
let diceMan = document.querySelector('img');
let roll = document.querySelector('roll');
let score = document.querySelector('score');
let resetBtn = document.querySelector('.reset');



function reset () {
  cube.style.visibility = 'hidden';
  start.style.visibility = 'visible';
  document.querySelector('.score').innerHTML = 0;
  document.querySelector('.roll').innerHTML = 0;
  document.querySelector('.scoreBoard').innerHTML = 'Score';
  score = 0;
}

function gameOver () {
  start.style.visibility = 'visible';
  document.querySelector('.score').innerHTML = 0;
  document.querySelector('.roll').innerHTML = 0;
  document.querySelector('.scoreBoard').innerHTML = 'Game Over';
  score = 0;
  document.querySelector('.rollBoard').innerHTML = 'Game Over';
}


function rollDice() {

  let randNum = Math.floor(Math.random()*6)+1 ;
    console.log(randNum )
     let showClass = 'show-' + randNum;
    console.log(showClass)
      if ( currentClass ) {
      cube.classList.remove( currentClass );
    }
    cube.classList.add( showClass );
    currentClass = showClass;
    if  (randNum === 1) {
      document.querySelector('.scoreBoard').innerHTML = 'Game Over';
      document.querySelector('.score').innerHTML = 0;
      document.querySelector('.roll').innerHTML = '1! Game Over';
      gameOver();
    } else if (randNum !== 1) {
      document.querySelector('.scoreBoard').innerHTML = 'Score';
      document.querySelector('.score').innerHTML = score += randNum;
      document.querySelector('.roll').innerHTML = randNum;
      document.querySelector('.rollBoard').innerHTML = 'Roll';
      }  if (score >= 20){
      document.querySelector('.scoreBoard').innerHTML = 'You Win';
      
      

    }

  }
  

  rollBtn.addEventListener('click', function() {
    cube.style.visibility = 'visible';
    start.style.visibility = 'hidden';
    diceMan.classList.add('shaking'); 
    setTimeout(() => {
   diceMan.classList.remove('shaking');
   
   
 }, 800);
  });



rollBtn.addEventListener("click", rollDice);
resetBtn.addEventListener("click", reset);




