const btnsContainer = document.getElementById("btnsContainer");
let playerWins = 0;
let computerWins = 0;
let resultText = "";

function getComputerChoice() {
  const computerOptions = ["rock", "paper", "scissors"];
  const computerNumber = Math.floor(Math.random() * 3);
  const computerChoice = computerOptions[computerNumber];
  return computerChoice;
}

btnsContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const playerSelection = event.target.id;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
});

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    resultText = "A draw.";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    resultText = "You win!";
    playerWins++;
  } else {
    resultText = "You lose.";
    computerWins++;
  }
  updateScore();
}

function announceWinner() {
  setTimeout(() => {
    if (playerWins === 5) {
      alert("Congratulations! You won the game!");
    } else {
      alert("The computer won the game. Better luck next time!");
    }
    resetScore();
  }, 100);
}

function updateScore() {
  document.getElementById("playerWins").textContent = playerWins;
  document.getElementById("computerWins").textContent = computerWins;
  document.getElementById("result").textContent = resultText;

  console.log(computerWins);
  console.log(playerWins);
  if (playerWins === 5 || computerWins === 5) {
    announceWinner();
  }
}

function resetScore() {
  playerWins = 0;
  computerWins = 0;
  updateScore("");
}
