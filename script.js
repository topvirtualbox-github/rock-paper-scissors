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

function playerChoice() {
    let choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    choice = choice[0].toUpperCase() + choice.slice(1);
    while (choice !== "Rock" && choice !== "Paper" && choice !== "Scissors") {
        console.log("INVALID ANSWER");
        choice = prompt("Rock, Paper or Scissors?").toLowerCase();
        choice = choice[0].toUpperCase() + choice.slice(1);
    }
    return choice;
}

function playRound(player, computer) {
    if (player === "Rock" && computer === "Scissors" || player === "Paper" && computer === "Rock" || player === "Scissors" && computer === "Paper") {
        return "You Win! " + player + " beats " + computer;
    } else if (player === "Rock" && computer === "Paper" || player === "Paper" && computer === "Scissors" || player === "Scissors" && computer === "Rock") {
        return "You Lose! " + computer + " beats " + player;
    } else {
        return "It's a Tie!";
    }
}

function playGame() {
    let numberRound = 1;
    let playerScore = 0;
    let computerScore = 0;
    while (numberRound <= 5) {
        console.log("ROUND " + numberRound);
        let result = playRound(playerChoice(), computerChoice());
        if (result[4] === "W") {
            playerScore++;
        } else if (result[4] === "L") {
            computerScore++;
        }
        console.log(result);
        console.log("PLAYER " + playerScore + " - " + computerScore + " COMPUTER");
        numberRound++;
    }
    if (playerScore > computerScore) {
        console.log("THE PLAYER WINS!!!");
    } else if (computerScore > playerScore) {
        console.log("THE COMPUTER WINS!!!");
    } else {
        console.log("IT'S A TIE!!!");
    }
}

playGame();