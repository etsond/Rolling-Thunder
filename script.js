'use strict';
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

//Select the Elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
//Current Score
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
//adding a hidden class
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores = [0,0]; 
let currentScore = 0;
let activePlayer = 0;
let playing = 0;;


const init = function(){
//defining a current score to define 
const scores = [0,0];
currentScore = 0;
activePlayer = 0;
playing = true;
    // diceEl.classList.add("hidden");
    //  document.getElementById(`score--${activePlayer}`).textContent = 0;
     score0El.textContent = 0;
     score1El.textContent = 0;
     current0El.textContent = 0;
     current1El.textContent = 0;
     //adding the hidden class to the dice.
     diceEl.classList.add("hidden");
     player0El.classList.remove('player--winner');
     player1El.classList.remove("player--winner")
     player0El.classList.add("player--active");
     player1El.classList.remove("player--active");
}
init();

const switchPlayer = function(){
document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;        
        //switch player (if activie player is zero, then new player to be one ), else should be zero
        activePlayer = activePlayer === 0 ? 1: 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
};

//adding an event for clicking the button
btnRoll.addEventListener("click", function(){
    if(playing){
    //start generating random dice roll
    const dice = Math.trunc(Math.random()*6)+ 1;
    // console.log(dice);
    //display the dice
    diceEl.classList.remove("hidden");
    //usign the source of the images to generate the random pictures
     diceEl.src = `dice-${dice}.png`
    //check if the dice roll is 1, if it is go to the other player
   if(dice !== 1){
    //add the dice to the new score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    //current0El.textContent = currentScore // need to update to toher player
   }else{
    //switch player
    switchPlayer();
   }
     }
});
btnHold.addEventListener("click", function(){
    
    if(playing){
            //add current score to active player score
            scores[activePlayer] += currentScore; 
            // console.log("Hold button")
            // scores[1] = scores[1] + currentScore
            document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
                //check if player score >= 100
     if (scores[activePlayer] >= 30){
        playing = false;
        //removing the dice after the game has been won
        diceEl.classList.add("hidden");
        //finish the game
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        ocument.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        }
        else {
                //switch to the next player
                switchPlayer();

            }
    }

});

btnNew.addEventListener("click", init);