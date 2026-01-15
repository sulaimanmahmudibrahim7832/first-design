const paperButton = document.querySelector('.paper-button');
const rockButton = document.querySelector(".rock-button");
const scissorsButton = document.querySelector(".scissors-button");
const resetButton = document.getElementById('reset');
const resultButton = document.querySelector('.Result-screen');
let score;
if (score === undefined) {
    score = {
   wins: 0,
   ties: 0,
   loses: 0,
   total:0
 }
} else {
  JSON.parse(localStorage.getItem('score'));
}
paperButton.addEventListener('click', () => {
   playGame("paper")
  //computerMove = pickComputerMove();
});
rockButton.addEventListener("click", () => {
  
  playGame("rock");
})
scissorsButton.addEventListener("click", () => {
 // computerMove = pickComputerMove();
  playGame("scissors")
}
);  
//const moveElement = document.querySelector(".Move");
   //JSON.parse(localStorage.getItem('score'))


//console.log(resultButton);
/*function updateScore() {
  if (result === 'you win') 
    wins++
  else if (result === 'you lose')
    loses++
  else if (result === 'ties')
    ties++
}*/
let image = '';
function pickComputerMove() {
  let computerMove = '';
  const randomNumber = Math.random();
    if (randomNumber > 0 && randomNumber < 1/3) {
      computerMove = "paper";
      image = ` <img class="computer" src="game-images/paper-emoji.png">`;
    }
    else if (randomNumber > 1/3 && randomNumber < 2/3) {
      computerMove = "rock";
      image = `<img class="computer" src="game-images/rock-emoji.png">`;
    }
    else if (randomNumber > 2/3 && randomNumber < 1) {
      computerMove = "scissors";
      image = ` <img class="computer" src="game-images/scissors-emoji.png">`;
  }
  //console.log(computerMove);
  return computerMove;
    
};
function playGame(playerMove) {
    let result = '';
 let computerMove = pickComputerMove();
  function showResult()
  {
      resultButton.innerHTML = `
  <p>you selected ${playerMove}
    ${playerImage}
    </p>
  <p>computer gave you ${computerMove} , ${image}</h3>
  <div class="out-put">
  <span class="wins-screen"> wins: ${score.wins}</span>
  <span class="loses-screen"> loses: ${score.loses}</span>
  <span class="ties-screen">ties: ${score.ties}</span>
  </p>
  <h4 class="total-screen"> total = ${score.total}</h4>
  </div>
  `;
  };
  resetButton.addEventListener('click', () => {
    const messageDiv = document.querySelector('.user-message');
  score.wins = 0;
  score.ties = 0;
  score.loses = 0;
    score.total = 0;
    let deleteTime;
    messageDiv.innerHTML = "was rest";
  setTimeout(() => {
    messageDiv.innerHTML = "";
  }, 1000)
    if (deleteTime === undefined) {
      clearTimeout();
    }
    showResult();
});
  if (playerMove === "paper") {
    playerImage = `<img src="game-images/paper-emoji.png">`;
    if (computerMove === "paper") {
      result = "ties";
      updateScore();
     // alert(`you pick ${playerMove}, computer picked ${computerMove}, ${result}`);*/
      showResult();
    }
    else if (computerMove === "rock") {
      result = "you win";
      updateScore();
      
      //alert(`you pick ${playerMove}, computer picked ${computerMove}, ${result}`);*/
      showResult();
    }
    else if (computerMove === "scissors") {
      result = "you lose";
      updateScore();
      //alert(`you pick ${playerMove}, computer picked ${computerMove}, ${result}`);*/
      showResult();
    }
      
  }
  else if (playerMove === "rock") {
    playerImage = `<img src="game-images/rock-emoji.png">`;
      if (computerMove === "paper") {
        result = "you lose";
        updateScore();
        // updateScore();
        showResult();
   //alert(`you pick ${playerMove}, computer picked ${computerMove}, ${result}`);
  }
  else if (computerMove === "rock") {
        result = "ties";
        updateScore();
        showResult();
    //alert(`you pick ${playerMove}, computer picked ${computerMove}, ${result}`);
  }
  else if (computerMove === "scissors") {
        result = "you win";
        updateScore();
        showResult();
    //console.log(`you pick ${playerMove}, computer picked ${computerMove}, ${result}`);
  }
   
    //console.log("rock is selected");
  }
  else if (playerMove === 'scissors') {
    playerImage = ` <img src="game-images/scissors-emoji.png">`;
       if (computerMove === "paper") {
         result = "you win";
         updateScore();
         showResult();
      // alert(`you pick ${playerMove}, computer picked ${computerMove}, ${result}`);
     }
     else if (computerMove === "rock") {
         result = "you lose";
         updateScore();
         showResult();
      // alert(`you pick ${playerMove}, computer picked ${computerMove}, ${result}`);
     }
     else if (computerMove === "scissors") {
         result = "ties";
         updateScore();
         showResult();
      // alert(`you pick ${playerMove}, computer picked ${computerMove}, ${result}`);
     }
    //console.log("scissors now");
    
  }
  localStorage.setItem('score', JSON.stringify(score));
function updateScore() {
  if (result === 'you win') { score.wins++ }
  else if (result === 'you lose') { score.loses++ }
  else if (result === 'ties') { score.ties++ }
  score.total++;
}
};
/* localStorage.setItem('score', JSON.stringify(score));
 function updateScore() {
   if (result === 'you win') { score.wins++ }
   else if (result === 'you lose') { score.loses++ }
   else if (result === 'ties') { score.ties++ }
   score.total++;
 }*/
//console.log(paperButton, rockButton, scissorsButton);