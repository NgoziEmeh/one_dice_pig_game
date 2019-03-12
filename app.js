
//Declaring needed variables
var scores, roundScore, activePlayer;

//Start new game
init();


//DOM manipulation
document.querySelector('.btn-roll').addEventListener('click', function() {
  
  var dice = Math.floor(Math.random() * 6) + 1;
