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