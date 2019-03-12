
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
    //Add to Current score
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    
    }else {
      //Give to next player to play
      nextPlayer();
      
  }      
});


document.querySelector('.btn-hold').addEventListener('click', function(){
  //Add current score to main score
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer] += roundScore;
  
  //Give next player to play (fuction)
  function nextPlayer (){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    
    roundScore = 0;
      
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    
    document.querySelector('.player-1-panel').classList.toggle('active');
    
