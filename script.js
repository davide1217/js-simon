/*
una funzione ( che fa partire una timingfunction di 5 secondi( che :
genera 5 numeri random e alla fine li cancella) per poi chiedere i numeri all'utente e vedere quanti e quali ha indovinato);
*/

const display = document.getElementById('numbers');
const btn = document.querySelector('button');
const numeri = [];
const numeriInseriti = [];
const numeriCorretti = [];
const num = 5;

btn.addEventListener('click', init);

function init() {
  
  btn.classList.add('d-none');

  setTimeout(function tempoPerMemorizzare() {

    display.innerHTML = '';

    inserireInumeri();

    comparareArray();

  }, 5 * 1000);

  generateNumbers();
};

function comparareArray() {
  
  for(let i = 0; i < numeriInseriti.length; i++) {

    if(numeri.includes(parseInt(numeriInseriti[i]))){

      numeriCorretti.push(numeriInseriti[i]);

    }

  }

  display.innerHTML = `Hai indovinato ${numeriCorretti.length} numeri : ${numeriCorretti} `;
  
}

function inserireInumeri(){

  for(let i = 1; i <= num; i++){
    
    numeriInseriti.push(prompt('inserire i numeri un alla volta'));

  }
  
}

function generateNumbers() {

  for(let i = 0; i < num; i++){

    n = getRandomNumber(1, 100);

    if(i < num - 1) {
      display.append(n + ' ' + '-' + ' ')
    } 
    else {
      display.append(n)
    }
    
    numeri.push(n);

  };

};

function getRandomNumber(min, max){

  return  Math.floor(Math.random() * (max - min +1) + min );

};