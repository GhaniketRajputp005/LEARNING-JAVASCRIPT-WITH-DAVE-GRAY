const player = "rock";
const computer = "scissors";

switch(player){
    case computer:
        console.log("tie game");
        break;
    case "rock":
        if(computer === "paper")
        console.log("computer wins");
        else
        console.log("player wins");
        break;

    case "paper" :
        if(computer === "scissors")
        console.log("computer wins");
        else
        console.log("player wins");
        break;

    default:
        if(computer === "rock")
        console.log("computer wins");
        else
        console.log("player wins");


        

    

}