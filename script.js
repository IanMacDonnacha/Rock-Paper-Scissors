const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerImg = document.querySelector(".img-container")
const cpuImg = document.querySelector(".cpu-img")
const button = document.querySelectorAll(".button")
const announce = document.querySelector(".announce-container")

    
rock.addEventListener("click", () => {
    game("rock");
    const img = document.createElement("img");
    img.src = "img/rock-paper-scissors-296854__340.webp";
    playerImg.appendChild(img);
    button.forEach((btn) => {
        btn.disabled = true;
    })
    setTimeout(() => {
        img.remove();
        button.forEach((btn) => {
            btn.disabled = false;
        });
    }, 5000);
});

paper.addEventListener("click", () =>{
    game("paper");
    const img = document.createElement("img");
    img.src = "img/rock-paper-scissors-296855__340.webp";
    playerImg.appendChild(img);
    button.forEach((btn) => {
        btn.disabled = true;
    })
    setTimeout(() => {
        img.remove();
        button.forEach((btn) => {
            btn.disabled = false;
        });
    }, 5000);
});
scissors.addEventListener("click", () => {
    game("scissors");
    const img = document.createElement("img");
    img.src = "img/rock-paper-scissors-296853__340.webp";
    playerImg.appendChild(img);
    button.forEach((btn) => {
        btn.disabled = true;
    })
    setTimeout(() => {
        img.remove();
        button.forEach((btn) => {
            btn.disabled = false;
        });
    }, 5000);
});

function generateComputerChoice() {
    const options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random() * options.length)];
};

function printCpuChoice (cpuChoice) {
    const img =document.createElement("img");
    if (cpuChoice === "rock") {
        img.src = "img/rock-paper-scissors-296854__340.webp"
        cpuImg.appendChild(img);
    } else if (cpuChoice === "paper"){
        img.src = "img/rock-paper-scissors-296855__340.webp"
        cpuImg.appendChild(img);
    }else {
        img.src = "img/rock-paper-scissors-296853__340.webp"
        cpuImg.appendChild(img);
    }
    setTimeout(() => {
        img.remove()
    }, 5000)
}



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

function announceWinner (text) {
    announce.style.display = "block"
    if (text === "player") {
        announce.innerHTML = "Player you are the winner"
    } else if (text === "cpu") {
        announce.innerHTML = "Computer you are the winner"
    } else {
        announce.innerHTML = "It is a draw!"
    }
    setTimeout(() => {
        announce.style.display = "none";
    }, 5000)
}

function game(playerSelection){
    let cpuChoice = generateComputerChoice();
    printCpuChoice(cpuChoice);
    let winner = gameLogic(playerSelection, cpuChoice);
    if (winner === "player"){
        announceWinner("player")
    }else if (winner === "cpu") {
        announceWinner("cpu")
    }else{
        announceWinner("draw")
    }
}
