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