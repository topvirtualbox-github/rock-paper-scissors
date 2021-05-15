const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");
const displayRound = document.querySelector("#displayRound");
const displayScore = document.querySelector("#displayScore");

let playerScore = 0;
let computerScore = 0;

btnRock.addEventListener("click", function() {
    playRound("Rock", computerChoice());
});
btnPaper.addEventListener("click", function() {
    playRound("Paper", computerChoice());
});
btnScissors.addEventListener("click", function() {
    playRound("Scissors", computerChoice());
});

function computerChoice() {
    let random = Math.random();
    if (random < 0.333) {
        return "Rock";
    } else if (random < 0.666) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(player, computer) {
    let result;
    if (player === "Rock" && computer === "Scissors" || player === "Paper" && computer === "Rock" || player === "Scissors" && computer === "Paper") {
        result = "You Win! " + player + " beats " + computer;
    } else if (player === "Rock" && computer === "Paper" || player === "Paper" && computer === "Scissors" || player === "Scissors" && computer === "Rock") {
        result = "You Lose! " + computer + " beats " + player;
    } else {
        result = "It's a Tie!";
    }
    if (result[4] === "W") {
        playerScore++;
    } else if (result[4] === "L") {
        computerScore++;
    }
    displayRound.textContent = result;
    displayScore.textContent = "PLAYER " + playerScore + " - " + computerScore + " COMPUTER"; 
    if (playerScore > 4 || computerScore > 4) {
        if (playerScore > computerScore) {
            displayScore.textContent += " (YOU WIN!!!)"; 
        } else {
            displayScore.textContent += " (YOU LOSE!!!)"; 
        }
        playerScore = 0;
        computerScore = 0;
    }
}