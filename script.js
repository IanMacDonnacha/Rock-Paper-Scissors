const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

    
rock.addEventListener("click", () => {
    game("rock");
})
paper.addEventListener("click", () =>{
    game("paper");
})
scissors.addEventListener("click", () => {
    game("scissors");
})

function generateComputerChoice() {
    const options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random() * options.length)];
};

function gameLogic(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "tie";
    } else if ((playerSelection === "rock" && computerSelection === "scissors")||
              (playerSelection === "paper" && computerSelection === "rock") ||
              (playerSelection === "scissors" && computerSelection === "paper")){
        return "player";
    } else {
        return "cpu"
    }    
}

function playRounds(){
    rounds = 0
    playerScore = 0
    computerScore = 0

}

function game(playerSelection){
    let cpuChoice = generateComputerChoice();
    let winner = gameLogic(playerSelection, cpuChoice);
    console.log(playerSelection)
    console.log(cpuChoice)
    if (winner === "player"){
        console.log(`Player, you are the winner!`)
    }else if (winner === "cpu") {
        console.log( `Computer, you are the winner!`)
    }else{
        console.log("Draw")
    }
}
