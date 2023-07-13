function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (!playerSelection) {
        return "Invalid input. Please enter a valid choice.";
      }
    
    playerSelection = playerSelection.toLowerCase(); 
    
    if (playerSelection === computerSelection.toLowerCase()){
        return "It's a tie! You both selected " + computerSelection;
    }
    else if (playerSelection === "rock" && computerSelection === "Paper"){
        return "You lose! Paper beats Rock";
    }
    else if (playerSelection === "scissors" && computerSelection === "Paper"){
        return "You win! Scissors beats Paper";
    }
    else if (playerSelection === "scissors" && computerSelection === "Rock"){
        return "You lose! Rock beats Scissors";
    }
    else if (playerSelection === "paper" && computerSelection === "Rock"){
        return "You win! Paper beats Rock";
    }
    else if (playerSelection === "paper" && computerSelection === "Scissors"){
        return "You lose! Scissors beats Paper";
    }
    else if (playerSelection === "rock" && computerSelection === "Scissors"){
        return "You win! Rock beats Scissors";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
      const computerSelection = getComputerChoice();
      const roundResult = playRound(playerSelection, computerSelection);
  
      console.log("Round " + (i + 1) + ":");
      console.log("Player chose: " + playerSelection);
      console.log("Computer chose: " + computerSelection);
      console.log(roundResult);
  
      if (roundResult.includes("win")) {
        playerScore++;
      } else if (roundResult.includes("lose")) {
        computerScore++;
      }
    }
  
    console.log("Game over!");
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
  
    if (playerScore > computerScore) {
      console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
      console.log("You lose the game. Better luck next time!");
    } else {
      console.log("It's a tie. The game ended in a draw.");
    }
  }
  
  game();
//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));
