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
console.log(generateChoice())

//Lots of repetitive code here.
function playGame(playerSelection, computerSelection){
    player = playerSelection.toLowerCase()
    computer = computerSelection.toLowerCase()
    if (player === "rock" && computer === "scissors"){
        return "Player, you are the winner!"
    }else if (player === "rock" && computer === "paper"){
        return "Computer, you are the winner!"
    }else if (player === "paper" && computer === "scissors"){
        return "Computer, you are the winner!"
    }else if (player === "paper" && computer === "rock"){
        return "Player, you are the winner!"
    }else if (player === "scissors" && computer === "rock"){
        return "Computer, you are the winner!"
    }else if (player === "scissors" && computer === "paper"){
        return "Player, you are the winner!"
    }else {
        return "It is a draw!"
    }
}

const playerSelection = "Rock"
const computerSelection = generateChoice()

console.log(playGame(playerSelection,computerSelection))