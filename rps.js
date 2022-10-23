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
    return ("It's a tie!");
    break;
    case playerSelection === "rock" && computerSelection === "scissors" :
    return ("You win! Rock beats scissors!");
    break;   
    case playerSelection === "rock" && computerSelection === "paper" :
    return ("You lose! Paper beats Rock!");
    break;
    case playerSelection === "scissors" && computerSelection === "paper" :
    return("You win! Scissors beats paper!");
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
// 3. call playRound function
// prompt get value playerSelection
// jf return you lose + 0 point
// if return you win + 1 point
// for loop - i++ aslong I < 5
// the end you have won the game by score1:Score2
// if score 1 < score 2 you lost

function game() {
let score1 = 0;
let score2 = 0;

    for (let i = 0; i < 5; i++) {

    let winorlose = playRound(prompt("What do you choose?"));
  
    switch(true) {

   case winorlose.includes("win"):
    console.log(winorlose);
    score1 += 1;
   console.log("Score: Player: " + score1 + " Computer: " +score2);
   break;
   case winorlose.includes("lose") :
    console.log(winorlose);
    score2 += 1;
    console.log("Score: Player: " + score1 + " Computer: " +score2);
    break;
    case winorlose.includes("tie") :
        console.log(winorlose);
        console.log("Score: Player: " + score1 + " Computer: " +score2);
    }
}

   switch(true) {
    case score1 < score2 :
    console.log("Final Score: Player: " + score1 + " Computer: " +score2);
    console.log("You lost the game! Loser!");
    break;
    default:
    console.log("Final Score: Player: " + score1 + " Computer: " +score2);
    console.log("Congratulations! You won the game!")    
   }
}
