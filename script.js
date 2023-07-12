function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // Remove the 'const' keyword here
    
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

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
