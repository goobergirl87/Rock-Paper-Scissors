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
roundResult.setAttribute('style','font-family: monospace; font-size: 30px; color:rgb(230, 0, 126); margin: 20px');

const score = document.createElement('div');
score.classList.add('score');
container2.appendChild(score);
score.setAttribute('style','font-family: monospace; font-size: 20px; color:blanchedalmond; margin: 20px;');Set 

const finish = document.createElement('div');
finish.classList.add('finish');
container2.appendChild(finish);
finish.setAttribute('style','font-family: monospace; font-size: 20px; color:blanchedalmond; background-color: rgb(230, 0, 126); margin: 20px');

const playerSelection1 = document.querySelectorAll('rock');
rock.addEventListener('click', getComputerChoice)
rock.addEventListener('click', rockSelection)

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

  }    
  score.textContent = "computer points " + computerPoints  + " - player points " + playerPoints; 

  winner()
    
};


const playerSelection2 = document.querySelectorAll('paper');
paper.addEventListener('click', getComputerChoice)
paper.addEventListener('click', paperSelection)

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
  }
  score.textContent = "computer points " + computerPoints  + " - player points " + playerPoints; 

  winner()
  
};

const playerSelection3 = document.querySelectorAll('scissors');
scissors.addEventListener('click', getComputerChoice)
scissors.addEventListener('click', scissorsSelection)

function scissorsSelection () {

  let computerSelection = getComputerChoice();
 
   if  (computerSelection === "rock") {
     computerPoints += 1
     roundResult.textContent = "rock beats scissors, you lose!";
 
 } else if  (computerSelection === "paper") {
     playerPoints += 1
     roundResult.textContent = "scissors beats paper, you win!";
 
   }  else {
    roundResult.textContent = "Equal! Play again!";
  }

  score.textContent = "computer points " + computerPoints  + " - player points " + playerPoints;  

  winner()
    
 };

 function winner (){
  if (computerPoints === 5) {
    finish.textContent = "computer wins"; 
    rock.removeEventListener('click', getComputerChoice);
    rock.removeEventListener('click', rockSelection);
    paper.removeEventListener('click', getComputerChoice);
    paper.removeEventListener('click', paperSelection);
    scissors.removeEventListener('click', getComputerChoice);
    scissors.removeEventListener('click', scissorsSelection);
  }
  else if (playerPoints === 5) {
    finish.textContent = "you win";
    rock.removeEventListener('click', getComputerChoice);
    rock.removeEventListener('click', rockSelection);
    paper.removeEventListener('click', getComputerChoice);
    paper.removeEventListener('click', paperSelection);
    scissors.removeEventListener('click', getComputerChoice);
    scissors.removeEventListener('click', scissorsSelection); 

  } else {
  }
};

const startOver = document.querySelectorAll('startAgain');
startAgain.addEventListener('click', function(){
  window.location.reload();
  return false;
});