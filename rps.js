// ROCK PAPER SCISSORS 

function getComputerChoice() {
    let random_pick = Math.floor(Math.random() * 3);
    if (random_pick == 0) {
      return 'rock';
    }
    else if (random_pick == 1) {
      return 'paper';
    }
    else {
      return 'scissors';
    }
}

let playerPoints = 0;
let computerPoints = 0;

const container2 = document.querySelector('#container2');

const roundResult = document.createElement('div');
roundResult.classList.add('roundResult');
container2.appendChild(roundResult);

const playerSelection1 = document.querySelectorAll('rock');

function rockSelection () {

  let computerSelection = getComputerChoice();

  if (computerSelection === "scissors") {
    playerPoints += 1
    roundResult.textContent = "rock beats scissors, you win!";

  } else if (computerSelection === "paper") {
    computerPoints += 1
    roundResult.textContent = "paper beats rock, you lose!"; 

  }  else {
    roundResult.textContent = "Equal! Play again!";
    
}};


const playerSelection2 = document.querySelectorAll('paper');

function paperSelection () {

  let computerSelection = getComputerChoice();

  if  (computerSelection === "rock") {
    playerPoints += 1
    roundResult.textContent = "paper beats rock, you win!";

}  else if  (computerSelection === "scissors") {
    computerPoints += 1
    roundResult.textContent = "scissors beat paper, you lose!";

  }  else {
    roundResult.textContent = "Equal! Play again!";
  
}};

const playerSelection3 = document.querySelectorAll('scissors');

function scissorsSelection () {

  let computerSelection = getComputerChoice();
 
   if  (computerSelection === "rock") {
     computerPoints += 1
     roundResult.textContent = "rock beats scissors, you lose!";
 
 } else if  (computerSelection === "paper") {
     playerPoints += 1
     roundResult.textContent = "paper beats scissors, you win!";
 
   }  else {
    roundResult.textContent = "Equal! Play again!";
 }};