console.log("Start");

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
    // return "It's a draw! You threw the same hands.";
    return "draw";
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection == "Paper")
  ) {
    return "win";
    // return `You win! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
  } else {
    return "loss";
    // return `You lose! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
  }
}

function playGame() {
  let playerWins = 0;
  let computerWins = 0;
  let gameDraws = 0;

  for (var i = 1; i <= 5; i++) {
    const playerSelection = prompt(
      "Please type 'rock', 'paper', or 'scissors':"
    );
    const computerSelection = getComputerChoice();
    caseChange(playerSelection);
    caseChange(computerSelection);
    let out = playRound(
      playerSelection,
      computerSelection,
      playerWins,
      computerWins,
      gameDraws
    );
    if (out == "draw") {
      console.log("draw");
      gameDraws++;
    } else if (out == "win") {
      console.log("win");
      playerWins++;
    } else {
      console.log("loss");
      computerWins++;
    }
  }

  if (playerWins === computerWins) {
    return "It's a draw! Neither of you gained the advantage in 5 rounds.";
  } else if (playerWins > computerWins) {
    return `You win! You beat the computer ${playerWins} to ${computerWins}`;
  } else {
    return `You lose! The computer beat you ${computerWins} to ${playerWins}`;
  }
}

const result = playGame();
console.log(result);
