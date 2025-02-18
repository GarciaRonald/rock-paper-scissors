"use strict"

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const spanPScore = document.querySelector(".p-score");
const spanCScore = document.querySelector(".c-score");
const paraMsg = document.querySelector(".current-round");
const paraWinner = document.querySelector(".winner");

let humanScore = 0;
let computerScore = 0;
let currRoundResult = "";

const updateScores = msg => {
    spanPScore.textContent = humanScore;
    spanCScore.textContent = computerScore;
    paraMsg.innerHTML = `<em>${msg}</em>`;
};

btnRock.addEventListener("click", () => {
    const humanChoice = "rock";
    const computerChoice = getComputerChoice();
    currRoundResult = playRound(humanChoice, computerChoice);
    updateScores(currRoundResult);
});

btnPaper.addEventListener("click", () => {
    const humanChoice = "paper";
    const computerChoice = getComputerChoice();
    currRoundResult = playRound(humanChoice, computerChoice);
    updateScores(currRoundResult);
});

btnScissors.addEventListener("click", () => {
    const humanChoice = "scissors";
    const computerChoice = getComputerChoice();
    currRoundResult = playRound(humanChoice, computerChoice);
    updateScores(currRoundResult);
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
        return "Game is tied! Neither player gets a point.";
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            return "Computer wins! Paper beats rock.";
        } else if (computerChoice === "scissors") {
            humanScore++
            return "You win! Rock beats scissors.";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore++;
            return "You win! Paper beats rock.";
        } else if (computerChoice === "scissors") {
            computerScore++;
            return "Computer wins! Scissors beat paper.";
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++;
            return "Computer wins! Rock beats scissors.";
        } else if (computerChoice === "paper") {
            humanScore++;
            return "You win! Scissors beat paper.";
        }
    }
};

// Function to trigger an entire game play
const playGame = () => {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
};