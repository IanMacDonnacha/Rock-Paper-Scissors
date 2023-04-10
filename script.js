function generateChoice() {
    choice = Math.floor(Math.random() * 3 );
    if (choice === 0) {
        return "Rock";
    }else if (choice === 1) {
        return "Paper";
    }else {
        return "Scissors";
    }
};

function playGame(playerSelection, computerSelection){
    player = playerSelection.toLowerCase();
    computer = computerSelection.toLowerCase();

    if (player === "rock" && computer === "scissors"){
        return 1;
    }else if (player === "rock" && computer === "paper"){
        return 0;
    }else if (player === "paper" && computer === "scissors"){
        return 0;
    }else if (player === "paper" && computer === "rock"){
        return 1;
    }else if (player === "scissors" && computer === "rock"){
        return 0;
    }else if (player === "scissors" && computer === "paper"){
        return 1;
    }else {
        return "It is a draw!"
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, Paper or Scissors?: ")
        let computerSelection = generateChoice();
        let game = playGame(playerSelection, computerSelection);
        console.log(game)
        if (game == 1){
            playerScore += 1;
        } else {
            computerScore += 1;
        }
    }
    if (playerScore > computerScore){
        return `Player you won ${playerScore} rounds out of 5, you are the winner!`
    }else {
        return `Computer you won ${computerScore} rounds out of 5, you are the winner!`
    }
}

console.log(game())