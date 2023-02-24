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
}