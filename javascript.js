/* 
Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
*/
function getComputerChoice () {
  const items = [`Rock`, `Paper`, `Scissors`];
  let choice = items[Math. floor(Math. random() * items.length)]
  return choice;
  }

/*
Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner or tie of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
*/

function getPlayerChoice () {
  const playerItems = [`Rock`, `Paper`, `Scissors`];
  let playerChoice = prompt(`Choose Rock, Paper, or Scissor`).toLowerCase();
  while (!playerItems.includes(playerChoice.toLowerCase())) {
    playerChoice = prompt(`You can only choose from the options available!`).toLowerCase();
  }
  return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
}


console.log(getPlayerChoice ());
console.log(getComputerChoice());




  


