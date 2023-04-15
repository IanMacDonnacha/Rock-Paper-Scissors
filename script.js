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
    player = playerSelection;
    computer = computerSelection;

    if (player === "Rock" && computer === "Scissors"){
        return 1;
    }else if (player === "Rock" && computer === "Paper"){
        return 0;
    }else if (player === "Paper" && computer === "Scissors"){
        return 0;
    }else if (player === "Paper" && computer === "Rock"){
        return 1;
    }else if (player === "Scissors" && computer === "Rock"){
        return 0;
    }else if (player === "Scissors" && computer === "Paper"){
        return 1;
    }else {
        return "It is a draw!"
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
        if (game == 1){
            playerScore ++;
        } else {
            computerScore ++;
        }
        rounds++;
    }
    if (playerScore > computerScore){
        return `Player you won ${playerScore} rounds out of 5, you are the winner!`
    }else {
        return `Computer you won ${computerScore} rounds out of 5, you are the winner!`
    }
}

console.log(game())