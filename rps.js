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

const playerSelection1 = document.querySelectorAll('rock');

function rockSelection () {

  let computerSelection = getComputerChoice();

  if (computerSelection === "scissors") {
    playerPoints += 1
    return "rock beats scissors, you win!";

  } else if (computerSelection === "paper") {
    computerPoints += 1
    return "paper beats rock, you lose!"; 

  }  else {
    return "Equal! Play again!";
    
}};


const playerSelection2 = document.querySelectorAll('paper');

function paperSelection () {

  let computerSelection = getComputerChoice();

  if  (computerSelection === "rock") {
    playerPoints += 1
    return "paper beats rock, you win!";

}  else if  (computerSelection === "scissors") {
    computerPoints += 1
    return "scissors beat paper, you lose!";

  }  else {
    return "Equal! Play again!";
  
}};

const playerSelection3 = document.querySelectorAll('scissors');

function scissorsSelection () {

  let computerSelection = getComputerChoice();
 
   if  (computerSelection === "rock") {
     computerPoints += 1
     return "rock beats scissors, you lose!";
 
 } else if  (computerSelection === "paper") {
     playerPoints += 1
     return "paper beats scissors, you win!";
 
   }  else {
    return "Equal! Play again!";
 }};
 

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerPoints += 1
        return "rock beats scissors, you win!";

      } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerPoints += 1
        return "paper beats rock, you lose!";   

      } else if  (playerSelection === "scissors" && computerSelection === "rock") {
        computerPoints += 1
        return "rock beats scissors, you lose!";  
        
      } else if  (playerSelection === "scissors" && computerSelection === "paper") {
        playerPoints += 1
        return "paper beats scissors, you win!";      
        
      }  else if  (playerSelection === "paper" && computerSelection === "rock") {
        playerPoints += 1
        return "paper beats rock, you win!";  
        
      }  else if  (playerSelection === "paper" && computerSelection === "scissors") {
        computerPoints += 1
        return "scissors beat paper, you lose!";
        
      }  else if (playerSelection === computerSelection) {
        return "Equal! Play again!";

      }  else {
        return "Typo?!";
    }
}

