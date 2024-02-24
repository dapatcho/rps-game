console.log("hey");

function getComputerChoice() {
  const computerOptions = ["Rock", "Paper", "Scissors"];
  const computerNumber = Math.floor(Math.random() * 3);
  const computerChoice = computerOptions[computerNumber];
  return computerChoice;
}

const playerSelection = "ROCK";
const computerSelection = getComputerChoice();

if

function playRound(playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
  return "It's a draw! You threw the same hands."
}
else if (playerSelection === '')
}


function caseChange(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
caseChange(playerSelection);
console.log(playerSelection);

// console.log(playRound(playerSelection, computerSelection))
