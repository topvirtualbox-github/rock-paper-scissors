const score = document.querySelector("#score");
const round = document.querySelector("#round");
const message = document.querySelector("#message");
const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");
const btnRestart = document.querySelector("#btnRestart");

let scorePlayer = 0;
let scoreComputer = 0;
let playGame = true;
score.textContent = scorePlayer + " - " + scoreComputer;

btnRock.addEventListener("click", function() {
    playRound("Rock", computerChoice());
});
btnPaper.addEventListener("click", function() {
    playRound("Paper", computerChoice());
});
btnScissors.addEventListener("click", function() {
    playRound("Scissors", computerChoice());
});
btnRestart.addEventListener("click", function() {
    scorePlayer = 0;
    scoreComputer = 0;
    playGame = true;
    score.textContent = scorePlayer + " - " + scoreComputer;
    round.textContent = "";
    message.textContent = "";
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
    if (playGame) {
        let resolution;
        if (player === "Rock" && computer === "Scissors" || player === "Paper" && computer === "Rock" || player === "Scissors" && computer === "Paper") {
            resolution = "You Win! " + player + " beats " + computer;
        } else if (player === "Rock" && computer === "Paper" || player === "Paper" && computer === "Scissors" || player === "Scissors" && computer === "Rock") {
            resolution = "You Lose! " + computer + " beats " + player;
        } else {
            resolution = "It's a Tie!";
        }
        if (resolution[4] === "W") {
            scorePlayer++;
        } else if (resolution[4] === "L") {
            scoreComputer++;
        }
        score.textContent = scorePlayer + " - " + scoreComputer;
        round.textContent = resolution;
        if (scorePlayer > 4 || scoreComputer > 4) {
            if (scorePlayer > scoreComputer) {
                message.textContent = "YOU WIN THE GAME";
            } else {
                message.textContent = "YOU LOSE THE GAME";
            }
            playGame = false;
        }
    }
}