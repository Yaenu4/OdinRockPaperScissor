// randomly get number 1-3
//if number = 1 rock if number = 2 scissor usw.
// safe it in variable
// console Log variable
function getComputerChoice() {
let choice = 1
let number = Math.floor(Math.random() * 3) + 1;
switch(true) {
    case number === 1 :
 choice = "rock";
break;
   case number === 2 :
 choice = "scissors";
break;
    case number === 3 :
 choice = "paper";
break;
}
return choice;
}
// 2. call Computerchoice to get choice of pc
// take choice of player
// all letter small
// get result who wins?
// if player = getcomputer choice its a tie
// if player = rock and computer = scissors - You Win! Rock beats Scissors


function playRound(playerSelection, computerSelection) {
playerSelection = playerSelection.toLowerCase();
computerSelection = getComputerChoice();

switch(true) {
    case playerSelection === computerSelection :
    return ("It's a tie! Play Again!");
    break;
    case playerSelection === "rock" && computerSelection === "scissors" :
    return ("You Win! Rock beats scissors!");
    break;   
    case playerSelection === "rock" && computerSelection === "paper" :
    return ("You lose! Paper beats Rock!");
    break;
    case playerSelection === "scissors" && computerSelection === "paper" :
    return("You Win! Scissors beats paper!");
    break;
    case playerSelection === "scissors" && computerSelection === "rock" :
    return ("You lose! Rock beats scissors!")
    break;
    case playerSelection === "paper" && computerSelection === "rock" :
    return ("You win! Paper beats rock!");
    break;
    case playerSelection === "paper" && computerSelection === "scissors" :
    return ("You lose! Scissors beats paper!")            
}
}
