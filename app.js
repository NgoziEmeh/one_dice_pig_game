
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
      //Next player's play turn
      nextPlayer();
      
  }      
});


document.querySelector('.btn-hold').addEventListener('click', function(){
  //Add current score to main score
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer] += roundScore;
  
  //Next player's play turn (fuction)
  function nextPlayer (){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    
    roundScore = 0;
      
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    
    document.querySelector('.dice').style.display = 'none';
    
  }   
  
  //Declaring winner when main score is up to 250
  if (scores[activePlayer] >= 250){
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    
  }else{  
    //Next player's play turn
    nextPlayer();
    
  }  
  
});  
    
document.querySelector('.btn-new').addEventListener('click', function(){
  //Restart the game
  init();
  
});  

//Function for restarting the game
function init (){
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  
  document.querySelector('.dice').style.display = 'none';
  
  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  document.querySelector('#name-0').textContent = 'Player 1';
  document.querySelector('#name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  
}  
