console.log("hey");

function getComputerChoice() {
  const computerOptions = ["Rock", "Paper", "Scissors"];
  const computerNumber = Math.floor(Math.random() * 3);
  const computerChoice = computerOptions[computerNumber];
  return computerChoice;
}

function caseChange(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  playerSelection = caseChange(playerSelection);

  if (playerSelection === computerSelection) {
    gameDraws = gameDraws++;
    return "It's a draw! You threw the same hands.";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection == "Paper")
  ) {
    playerWins = playerWins++;
    return `You win! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
  } else {
    computerWins = computerWins++;
    return `You lose! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
  }
}

function playGame() {
  let playerWins = 0;
  let computerWins = 0;
  let gameDraws = 0;
  for (var i = 1; i <= 5; i++) {
    const playerSelection = "ROCK";
    const computerSelection = getComputerChoice();
    caseChange(playerSelection);
    caseChange(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
  }
}

console.log(playGame());
