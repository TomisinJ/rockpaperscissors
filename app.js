function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]
    let randomOption = options[Math.floor(Math.random()*options.length)]
    console.log(randomOption)
    return randomOption
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" & computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

function game() {
    
}