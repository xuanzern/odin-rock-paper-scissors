const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const randomNum = Math.floor((Math.random()*3));  //random number (0-2)
    return choices[randomNum];
}

function getHumanChoice(){
    const choice = prompt("Enter 1 for rock, 2 for paper, 3 for scissors")-1; //prompt player for choice
    return choices[choice];
}

let humanChoice;
const playerChoice = document.querySelector("#player-choice");

function playGame(){
    let rounds = 0;
    let humanScore = 0;
    let computerScore = 0;
    const scoreboard = document.querySelector("#score");
    const scoreTracker = document.createElement("p");
    const para = document.createElement("p");
    scoreboard.appendChild(scoreTracker);
    scoreboard.appendChild(para)

    function playRound(humanChoice, computerChoice){
        rounds++;
        //human win
        if (humanChoice == choices[0] && computerChoice == choices[2] ||
            humanChoice == choices[1] && computerChoice == choices[0]  ||
            humanChoice == choices[2] && computerChoice == choices[1]){
                humanScore++;
                para.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            }
        //computer win
        else if (computerChoice == choices[0] && humanChoice == choices[2] ||
            computerChoice == choices[1] && humanChoice == choices[0]  ||
            computerChoice == choices[2] && humanChoice == choices[1]){
                computerScore++;
                para.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        }
        //tie
        else{
            para.textContent = `It's a tie!`;
        }
        scoreTracker.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;
    }

    const playerChoice = document.querySelector("#player-choice");

    playerChoice.addEventListener('click', (event) =>{
        const target = event.target;
        if (target.matches('.choice-button')){
            const humanChoice = target.id;
            const computerChoice = getComputerChoice();            
            playRound(humanChoice, computerChoice);
            if (rounds == 5){
                para.textContent = `Final Score: User ${humanScore} : Computer ${computerScore}`
                humanScore = 0;
                computerScore = 0;
                rounds = 0;
                scoreTracker.textContent = `Human Score: ${humanScore}, Computer Score: ${computerScore}`;
            }
        }
    });

    
}

document.addEventListener('DOMContentLoaded', () => playGame())

