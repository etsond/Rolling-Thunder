'use strict';

//Select the Elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
//Current Score
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
//adding a hidden class
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")

const scores = [0,0];
//Starting at zero
score0El.textContent = 0;
score1El.textContent = 0;
//adding the hidden class to the dice.
diceEl.classList.add("hidden");

//defining a current score to define 
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function(){
    
}

//adding an event for clicking the button
btnRoll.addEventListener("click", function(){
    //start generating random dice roll
    const dice = Math.trunc(Math.random()*6)+ 1;
    console.log(dice);
    //display the dice
    diceEl.classList.remove("hidden");
    //usign the source of the images to generate the random pictures
     diceEl.src = `dice-${dice}.png`
    //check if the dice roll is 1, if it is go to the other player
   if(dice !== 1){
    //add the dice to the new score
    currentScore += dice;

    document.getElementById(`current--${activePlayer}`).textContent = 0;
    current0El.textContent = currentScore // need to update to toher player

   }else{
        //switch player (if activie player is zero, then new player to be one ), else should be zero
        activePlayer = activePlayer === 0? 1: 0;
   }
});
btnHold.addEventListener("click", function(){
    //add current score to active player score
    scores[activePlayer] += currentScore; 
    // scores[1] = scores[1] + currentScore
    document.getElementById(`current--${activePlayer}`.textContent) = scores[activePlayer];

    //check if player score >= 100

})

