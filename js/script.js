function getComputerChoice() {
  const options = "rps";
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function getHumanChoice() {
  let userOption = prompt("Enter rock, paper or scissors")
  userOption = userOption.toLowerCase()
  return userOption[0];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!")
  } else if (humanChoice === "r") {
    if (computerChoice === "p") {
      computerScore += 1;
      console.log("You lose! Paper beats Rock.")
    } else if (computerChoice === "s") {
      humanScore += 1;
      console.log("You win! Rock beats Scissors.")
    }
  } else if (humanChoice === "p") {
    if (computerChoice === "s") {
      computerScore += 1;
      console.log("You lose! Scissors beats Paper.")
    } else if (computerChoice === "r") {
      humanScore += 1;
      console.log("You win! Paper beats Rock.")
    }
  } else if (humanChoice === "s") {
    if (computerChoice === "r") {
      computerScore += 1;
      console.log("You lose! Rock beats Scissors.")
    } else if (computerChoice === "p") {
      humanScore += 1;
      console.log("You win! Scissors beats Paper.")
    }
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  displayWinner();
}

function displayWinner() {
  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("You lost the game!");
  } else {
    console.log("It's a tie!")
  }
  console.log(`Human Score: ${humanScore} Computer Score: ${computerScore}`)
}

playGame();
