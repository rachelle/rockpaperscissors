////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
function getPlayerMove(move){

   if(move){
    return move;
   } else { 
    return getInput();
   }
}
    
function getComputerMove(move) {

    if(move){
      return move; 
    } else { 
      return randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
   
  var winner;
    
    if(playerMove == computerMove){ 
      winner = "tie";
    }

    else if(playerMove === "rock" && computerMove === "paper"){
        winner = "Computer";
    }

    else if(playerMove === "rock" && computerMove === "scissors"){
         winner = "Player";
    }

    else if (playerMove === "paper" && computerMove === "rock"){
         winner = "Player";
    } 
    
    else if(playerMove === "paper" && computerMove === "scissors"){
         winner = "Computer";
    }

    else if(playerMove === "scissors" && computerMove === "rock"){
          winner = "Computer";

    } 

    else if(playerMove === "scissors" && computerMove === "paper"){
          winner = "Player";
    }
      console.log(playerMove + " Wins!" && ScomputerMove + " Wins!"); 

      return winner;
    }

    
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    

function playToFive() {
  console.log("Let's play Rock, Paper, Scissors");
  var playerWins = 0;
  var computerWins = 0;

  while(playerWins < 5 && computerWins < 5){
  
   var playerMove = getPlayerMove(); 
   var computerMove = getComputerMove();

   var winner = getWinner(playerMove,computerMove);
  
   console.log(winner);

   if(winner == 'Computer') {
      computerWins++;
    
   } else if (winner == "Player") {
      playerWins++; 
   }
     console.log("Player Wins: " + playerWins + " Computer Wins: " + computerWins)  ;
   } 
     return playerWins, computerWins;
   }
  
   playToFive();

