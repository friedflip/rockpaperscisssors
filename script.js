// FUNCTION
// FOR getComputerChoice
// ENDFOR Return strings "Rock", "Paper", or "Scissors"
// ENDFUNCTION

// INPUT
// FUNCTION
// FOR getHumanChoice 
// ENDFOR Return getComputerChoice
// ENDFUNCTION
// OUTPUT

// REPEAT playRound
// UNTIL humanScore > computerScore OR computerScore > humanScore

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() *choices.length);
    let computerChoice = choices(randomIndex);
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

if (playerSelection === computerSelection) {
    return "It's a tie!";
} else if {
(playerSelection === "Rock" && computerSelection === "Scissors") ||
(playerSelection === "Paper" && computerSelection === "Rock") ||
(playerSelection === "Scissors" && computerSelection === "Paper")
} {
    return "You win!" + playerSelection + " beats " + computerSelection;
} else {
    return "You lose!" + computerSelection + " beats " + playerSelection;
}
}

 function game() {
    let playerScore = 0;
    let computerSCore = 0;

for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose rock, paper, or scissors");
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
}
 }