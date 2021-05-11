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