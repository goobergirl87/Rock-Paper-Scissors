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