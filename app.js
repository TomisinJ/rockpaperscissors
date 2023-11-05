function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]
    let randomOption = options[Math.floor(Math.random()*options.length)]
    console.log(randomOption)
    return randomOption
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === "rock" & computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    }
}

const playerSelection = prompt("rock, paper or scissors");
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

function game() {

}