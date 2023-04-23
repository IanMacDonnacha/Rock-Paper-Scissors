const playerImg = document.querySelector(".img-container")
const cpuImg = document.querySelector(".cpu-img")
const selectionButtons = document.querySelectorAll("[data-selection]")
const announce = document.querySelector(".announce-container")
const computerScoreSpan = document.querySelector("[data-computer-score]")
const playerScoreSpan = document.querySelector("[data-your-score]")

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener("click", e => {
        selectionName = selectionButton.dataset.selection;
        game(selectionName);
        const img = document.createElement("img");
        if (selectionName === "rock") {
            img.src = "img/rock-paper-scissors-296854__340.webp";
        }else if (selectionName === "paper"){
            img.src = "img/rock-paper-scissors-296855__340.webp"; 
        }else {
            img.src = "img/rock-paper-scissors-296853__340.webp";  
        }
        playerImg.appendChild(img);
        selectionButtons.forEach((btn) => {
            btn.disabled = true;
        })
        setTimeout(() => {
            img.remove();
            selectionButtons.forEach((btn) => {
                btn.disabled = false;
            });
        }, 5000);
    });
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
        let ply = incrementScore(playerScoreSpan);
    }else if (winner === "cpu") {
        announceWinner("cpu")
        let cpu = incrementScore(computerScoreSpan);
    }else{
        announceWinner("draw")
    }
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}
