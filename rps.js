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

const computerSelection = getComputerChoice();
let playerPoints = 0;
let computerPoints = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "rock beats scissors, you win!";

      } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "paper beats rock, you lose!";   

      } else if  (playerSelection === "scissors" && computerSelection === "rock") {
        return "rock beats scissors, you lose!";  
        
      } else if  (playerSelection === "scissors" && computerSelection === "paper") {
        return "paper beats scissors, you win!";      
        
      }  else if  (playerSelection === "paper" && computerSelection === "rock") {
        return "paper beats rock, you win!";  
        
      }  else if  (playerSelection === "paper" && computerSelection === "scissors") {
        return "scissors beat paper, you lose!";
        
      }  else if (playerSelection === computerSelection) {
        return "Equal! Play again!";

      }  else {
        return "Typo?!";
    }
}