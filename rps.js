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
}