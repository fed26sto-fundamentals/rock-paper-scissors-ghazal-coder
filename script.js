// Define game moves
const moves = ["Rock", "Paper", "Scissors"];

// Function to randomly select a move
function randomMove() {
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

// Function to determine the game winner
function determineWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
        return "It's a tie!";
    } else if (
        (playerMove === "Rock" && computerMove === "Scissors") ||
        (playerMove === "Scissors" && computerMove === "Paper") ||
        (playerMove === "Paper" && computerMove === "Rock")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

// Event listener for the play button
document.getElementById("playButton").addEventListener("click", function() {
    const playerMove = randomMove();
    const computerMove = randomMove();
    const result = determineWinner(playerMove, computerMove);
    document.getElementById("result").textContent = `You chose ${playerMove}, Computer chose ${computerMove}. ${result}`;
});
