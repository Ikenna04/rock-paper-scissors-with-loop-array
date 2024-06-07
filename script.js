// Rock Paper Scissors With Loops And Arrays
let playGame = confirm("Shall We Play Rock, Paper Or Scissors?");
if (playGame) {
	// User Agreed To Play
	// Player Clicked OK
	while (playGame) {
		const playerChoice = prompt("Please Enter Rock, Paper Or Scissors.");
		if (playerChoice || playerChoice === "") {
			// Player Made A Choice
			// Player Clicked OK
			let playerOne = playerChoice.trim().toLowerCase();
			if (
				playerOne === "rock" ||
				playerOne === "paper" ||
				playerOne === "scissors"
			) {
				// Player Made A Correct Choice
				const computerChoice = Math.floor(Math.random() * 3 + 1);
				const rpsArray = ["rock", "paper", "scissors"];
				const computer = rpsArray[computerChoice];

				const result =
					playerOne === computer
						? "Tie Game!"
						: playerOne === "rock" && computer === "paper"
						? `playerOne: ${playerOne}\n computer: ${computer}\nComputer Wins!`
						: playerOne === "paper" && computer === "scissors"
						? `playerOne: ${playerOne}\n computer: ${computer}\nComputer Wins!`
						: playerOne === "scissors" && computer === "rock"
						? `playerOne: ${playerOne}\n computer: ${computer}\nComputer Wins!`
						: `playerOne: ${playerOne}\n computer: ${computer}\nYou Won!`;
				alert(result);
				playGame = confirm("Play Again?");
				if (!playGame) {
					alert("OK, Thanks For Playing");
				}
				continue;
			} else {
				// Player Entered A Wrong Input
				alert("You Didn't Enter Rock, Paper Or Scissors.");
			}
		} else {
			// Player Clicked Cancel
			alert("I Guess You Changed Your Mind. Maybe Next Time");
		}
	}
} else {
	// Player Clicked Cancel
	alert("Ok, Maybe Next Time.");
}
