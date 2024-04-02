let playGame = confirm("shall we play rock, paper, scissors?");
if (playGame) {
  //play
  while (playGame) {
    const playerChoice = prompt("Please enter rock, paper , scissors.");
    if (playerChoice) {
      let playerOne = playerChoice.trim().toLowerCase();
      if (
        playerOne === "rock" ||
        playerOne === "paper" ||
        playerOne === "scissors"
      ) {
        let computerChoice = Math.floor(Math.random() * 3 + 1);

        const rpsArray = ["rock", "paper", "scissors"];
        const computer = rpsArray[computerChoice - 1];

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
        playGame = confirm("Do you want to play again?");
        if(playGame == false) {
          alert("Thanks for playing");
        }   
        continue;
      } else {
        alert("you didn't enter rock, paper ,scissors");
        continue;
      }

       
    } else {
        alert("you didn't enter anything");
        break;
     
    }
  }
} else {
  alert("Pkka nhi khelega kya?");
}
