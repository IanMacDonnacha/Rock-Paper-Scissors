const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

    
rock.addEventListener("click", () => {
    game("Rock");
})
paper.addEventListener("click", () =>{
    game("Paper");
})
scissors.addEventListener("click", () => {
    game("Scissors");
})



function generateChoice() {
    const options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random() * options.length)];
};

function playGame(playerSelection, computerSelection){
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


function game(playerSelection){
    let rounds = 0
    let playerScore = 0;
    let computerScore = 0;
    while (rounds < 5){
        let cpuChoice = generateChoice();
        let game = playGame(playerSelection, cpuChoice);
        console.log(playerSelection)
        console.log(cpuChoice)
        if (game === "player"){
            playerScore ++;
        } else if (game === "cpu") {
            computerScore ++;
        } else {
            console.log("its a tie")
        }
        rounds++;
    }
    if (playerScore > computerScore){
        return `Player you won ${playerScore} rounds out of 5, you are the winner!`
    }else {
        return `Computer you won ${computerScore} rounds out of 5, you are the winner!`
    }
}
