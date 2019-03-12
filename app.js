
//Declaring needed variables
var scores, roundScore, activePlayer;

//Start new game
init();


//DOM manipulation
document.querySelector('.btn-roll').addEventListener('click', function() {
  //1. Generate random number
  var dice = Math.floor(Math.random() * 6) + 1;
