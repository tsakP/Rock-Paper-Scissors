// Main JS Project

const gameOptions = ["rock", "paper", "scissors"];

let playerSelection, computerSelection, roundResult, winner,
round = 1,
playerScore = 0,
computerScore = 0,
resultText = document.querySelector('#round-result-text'),
scoreText = document.querySelector('#score-text'),
playerChoiceText = document.querySelector('#player-choice-text');

const buttons = document.querySelectorAll('button');

const displayResult = (roundResult, scoreResult) => {
    resultText.textContent = roundResult;
    scoreText.textContent = scoreResult;
}

const playRound = function(playerSelection) {
    computerSelection = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    if (playerSelection == computerSelection) roundResult = `Round ${round} is a draw!`;
    if (
        playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "scissors" && computerSelection == "rock" ||
        playerSelection == "paper" && computerSelection == "scissors"
    ) {
        computerScore++;
        if (computerScore === 5) {
            roundResult = "🔴 Computer wins the game! 😢";
        } else {
            roundResult = `Computer wins round ${round}! (${computerSelection} beats ${playerSelection})`;
        }
    }
    if (
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "paper"
    ) {
        playerScore++;
        if (playerScore === 5) {
            roundResult = "👏 You win the game! 🐱‍🚀";
        } else {
            roundResult = `Player wins round ${round}! (${playerSelection} beats ${computerSelection})`;
        }
    } 
    scoreResult = `Player: ${playerScore} Computer: ${computerScore}`;
    displayResult(roundResult, scoreResult);
    round++;
}

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        playerSelection = button.id;
        playerChoiceText.textContent = `You chose ${playerSelection}!`;
        playRound(playerSelection);
    })
})


