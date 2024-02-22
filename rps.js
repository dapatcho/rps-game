console.log("hey");

function getComputerChoice() {
  const computerOptions = ["Rock", "Paper", "Scissors"];
  const computerNumber = Math.floor(Math.random() * 3);
  const computerChoice = computerOptions[computerNumber];
  // console.log(computerNumber);
  // console.log(computerOptions);
  // console.log(computerChoice);
  return computerChoice;
}

function caseChange(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  playerSelection = caseChange(playerSelection);

  if (playerSelection === computerSelection) {
    return "It's a draw! You threw the same hands.";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection == "Paper")
  ) {
    return `You win! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
  } else {
    return `You lose! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
  }
}
const playerSelection = "ROCK";
const computerSelection = getComputerChoice();
caseChange(playerSelection);
console.log(playRound(playerSelection, computerSelection));

