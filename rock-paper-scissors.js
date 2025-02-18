"use strict"

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const spanPScore = document.querySelector(".p-score");
const spanCScore = document.querySelector(".c-score");
const paraWinner = document.querySelector(".winner");

let humanScore = 0;
let computerScore = 0;

const updateScores = () => {
    spanPScore.textContent = humanScore;
    spanCScore.textContent = computerScore;
};

btnRock.addEventListener("click", () => {
    const humanChoice = "rock";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    updateScores();
});

btnPaper.addEventListener("click", () => {
    const humanChoice = "paper";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    updateScores();
});

btnScissors.addEventListener("click", () => {
    const humanChoice = "scissors";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    updateScores();
});

// Function to return computer's choice
const getComputerChoice = () => {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
};

// Function to play a single round
const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        console.log("Game is tied! Neither player gets a point.");
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("Computer wins! Paper beats rock.");
            computerScore++;
        } else if (computerChoice === "scissors") {
            console.log("You win! Rock beats scissors.");
            humanScore++
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats rock.");
            humanScore++;
        } else if (computerChoice === "scissors") {
            console.log("Computer wins! Scissors beat paper.");
            computerScore++;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            comsole.log("Computer wins! Rock beats scissors.");
            computerScore++;
        } else if (computerChoice === "paper") {
            console.log("You win! Scissors beat paper.");
            humanScore++;
        }
    }
};

// Function to trigger an entire game play
const playGame = () => {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
};