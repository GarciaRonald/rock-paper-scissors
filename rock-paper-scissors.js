"use strict"

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

// Function to return human's choice
const getHumanChoice = () => {
    const humanChoice = prompt("Please enter either rock, paper or scissors:", "");
    switch (humanChoice.toLowerCase()) {
        case "rock":
        case "paper":
        case "scissors":
            return humanChoice.toLowerCase();
            break;
        default:
            return "invalid input";
            break;
    }
};

// Testing block
/* console.table({
    comp: getComputerChoice(),
    user: getHumanChoice()
}); */