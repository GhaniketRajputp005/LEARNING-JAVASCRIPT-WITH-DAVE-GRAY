//==============INITIALIZING FUNCTION==============================================
initGame();

//=================ASKING to initialize==============================================
function initGame() {
  const startGame = confirm("Do you want to play a game?");
  startGame ? playGame() : alert("Thanks for playing");
}

//=================PLAY GAME FUNCTION==============================================

function playGame() {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }

    if (!playerChoice) {
      decidedNotToPlay();
      break;
    }

    playerChoice = evaluatePlayerChoice(playerChoice);

    if (!playerChoice) {
      invalidChoice();
      continue;
    }

    const computeChoice = getComputerChoice();
    evaluateWinner(playerChoice, computeChoice);

    if (askToPlayAgain()) {
      continue;
    } else {
      decidedNotToPlay();
      break;
    }
  }
}

//=================ASK TO PLAY AGAIN FUNCTION==============================================
function askToPlayAgain() {
  return confirm("Do you want to play again?");
}

//=================EVALUATE WINNER FUNCTION==============================================
function evaluateWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    alert("It's a tie");
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    alert("Computer wins");
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    alert("Computer wins");
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    alert("Computer wins");
  } else {
    alert("Player wins");
  }
}

//=================GET COMPUTER CHOICE FUNCTION==============================================
function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3 + 1);
  const rpsArray = ["rock", "paper", "scissors"];
  return rpsArray[computerChoice - 1];
}

//=================EVALUATE PLAYER CHOICE FUNCTION==============================================
function evaluatePlayerChoice(playerChoice) {
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else {
    return false;
  }
}

//=================DECIDED NOT TO PLAY FUNCTION==============================================
function decidedNotToPlay() {
  alert("Thanks for playing with us");
}

//=================INVALID CHOICE FUNCTION==============================================
function invalidChoice() {
  alert("you didn't enter anything");
}

//=================GET PLAYER CHOICE FUNCTION==============================================

function getPlayerChoice() {
  return prompt("Please enter rock, paper , scissors.");
}

//=================FORMAT PLAYER CHOICE FUNCTION==============================================
function formatPlayerChoice(playerChoice) {
  return playerChoice.trim().toLowerCase();
}
