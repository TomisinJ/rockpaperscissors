function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]
    let randomOption = options[Math.floor(Math.random()*options.length)]
    console.log(randomOption)
    return randomOption
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === "rock" & computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "paper" & computerSelection === "paper") {
        return "It's a draw"; 
    } else if (playerSelection.toLowerCase() === "scissors" & computerSelection === "paper") {
        return "You win! Scissors beats Paper"; 
    } else if (playerSelection.toLowerCase() === "rock" & computerSelection === "rock") {
        return "It's a draw"; 
    } else if (playerSelection.toLowerCase() === "paper" & computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection.toLowerCase() === "scissors" & computerSelection === "rock") {
        return "You Lose! Rock beats Scissors"; 
    } else if (playerSelection.toLowerCase() === "scissors" & computerSelection === "scissors") {
        return "It's a draw";
    } else if (playerSelection.toLowerCase() === "paper" & computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() === "rock" & computerSelection === "scissors") {
        return "You win! Rock beats Scissors";
    } 
}

const playerSelection = prompt("rock, paper or scissors");
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

function game() {

}