
//Declaring needed variables
var scores, roundScore, activePlayer;

//Start new game
init();


//DOM manipulation
document.querySelector('.btn-roll').addEventListener('click', function() {
  //1. Generate random number
  var dice = Math.floor(Math.random() * 6) + 1;
  
  //2. Diplay the generated number(dice value)
  var diceDom = document.querySelector('.dice');
  diceDom.style.display = 'block';
  diceDom.src = 'dice-' + dice + '.png';
  
  //3. Showing score in Current score area
  if(dice !== 1){
    //Add to roundscore
    roundScore += dice;
