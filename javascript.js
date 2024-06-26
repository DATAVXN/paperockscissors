/* 
Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
*/
const items = [`rock`, `paper`, `scissor`];
function getComputerChoice () {
  let computerChoice = items[Math. floor(Math. random() * items.length)].toLowerCase();
  let computerAnswer = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
      return computerAnswer;
  }

function getPlayerChoice () {
  let playerChoice = prompt(`Choose Rock, Paper, or Scissor`).toLowerCase();
  let playerAnswer = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
  if (playerChoice === 'rock' ||
      playerChoice === 'paper' ||
      playerChoice === 'scissor') {
         return playerAnswer;
      } else {
         prompt(`Not a valid choice.  Try again!`);
      } 
    }

/*
Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner or tie of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
*/
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function compareChoices() {
  for ( i=0; i<=5; i++) {
  if (playerSelection === computerSelection) {
      return 'Tie!';
    } 
  if (playerSelection === 'Rock') { 
    if (computerSelection === 'Paper'){
      computerScore += 1;
      return 'You Lose! Paper beats rock!';
    } else {
      playerScore += 1;
      return 'You Win!';
      }
    }
    if (playerSelection === 'Paper') { 
      if (computerSelection === 'Scissor'){
        computerScore += 1;
        return 'You Lose! Scissor beats Paper!!';
      } else {
        playerScore += 1;
        return 'You Win!';
        }
      }
    if (playerSelection === 'Scissor') { 
      if (computerSelection === 'Rock'){
        computerScore += 1;
        return 'You Lose! Rock beats Scissor!!';
      } else {
        playerScore += 1;
        return 'You Win!';
        }
      }
    }
}

console.log(`You entered ${playerSelection} and computer picked ${computerSelection}`);
console.log(compareChoices());
console.log(playerScore);
console.log(computerScore);

/*Write a NEW function called playGame(). Use the previous function inside of this one to play a five round game that keeps score and reports a winner or loser at the end.*/

const playGame = function (compareChoices) {
  
}


