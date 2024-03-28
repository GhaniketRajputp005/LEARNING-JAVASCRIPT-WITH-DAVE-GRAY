let playGame = confirm("shall we play rock, paper, scissors?");
if (playGame) {
  //play

  let playerChoice = prompt("Please enter rock, paper , scissors.");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);

      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";

      let result =
        computer === playerOne
          ? "tie game"
          : playerOne === "rock" && computer === "paper"
          ? `player ${playerOne}\nComputer ${computer}\nComputer wins`
          : playerOne === "paper" && computer === "scissors"
          ? `player ${playerOne}\nComputer ${computer}\nComputer wins`
          : playerOne === "scissors" && computer === "rock"
          ? `player ${playerOne}\nComputer ${computer}\nComputer wins`
          : `player ${playerOne}\nComputer ${computer}\Player wins`;

      alert(result);
    } else {
      alert("Not a valid choice");
    }
    

    let playagain = confirm(" wanna play again") ? location.reload() : alert("okay thanks for playing");
  } else {
    alert("you didn't enter rock, paper ,scissors");
  }
} else {
  alert("Pkka nhi khelega kya?");
}
