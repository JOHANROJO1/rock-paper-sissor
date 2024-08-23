const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const drawsDisplay = document.getElementById("drawsDisplay");
let playerScore = 0;
let computerScore = 0;
let draws = 0;
function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText","yellowtext");

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        
        case "IT'S A TIE!":
             resultDisplay.classList.add("yellowtext");
             draws++;
             drawsDisplay.textContent = draws;
             break;
        
        


        

     
     
    }

    


    checkBirthday();
}

function checkBirthday() {
    if (playerScore === 22) {
      const birthdayMessage = document.createElement("div");
      birthdayMessage.textContent = "HAPPY BIRTHDAY!";
      birthdayMessage.classList.add("birthdayMessage");
      document.body.appendChild(birthdayMessage);
      setTimeout(() => {
        birthdayMessage.remove();
      }, 3000);
  
      // Play audio
      const audio = new Audio("happy-birthday-1554461.mp3");
      audio.play();
    }
  }
  


