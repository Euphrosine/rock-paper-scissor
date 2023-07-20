const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (!playerSelection) {
        return "Invalid input. Please enter a valid choice.";
      }
    
    playerSelection = playerSelection.toLowerCase(); 
    computerSelection = computerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      playerScore++;
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      computerScore++;
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  
}


function displayResults(result) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.textContent = result;
}

function displayScores() {
  const scoresDiv = document.getElementById('results');
  scoresDiv.innerHTML += `<p>Player Score: ${playerScore}</p><p>Computer Score: ${computerScore}</p>`;
}

function checkWinner() {
  if (playerScore === 5) {
    displayResults("Congratulations! You won the game!");
    resetGame();
  } else if (computerScore === 5) {
    displayResults("Sorry! You lost the game.");
    resetGame();
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
}

function playGame(e) {
  const playerSelection = e.target.id;
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  displayResults(`Round: ${result}`);
  displayScores();
  checkWinner();
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', playGame);
});