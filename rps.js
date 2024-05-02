const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const randomNum = Math.floor((Math.random()*3));  //random number (0-2)
    return choices[randomNum];
}

function getHumanChoice(){
    const choice = prompt("Enter 1 for rock, 2 for paper, 3 for scissors")-1; //prompt player for choice
    return choices[choice];
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice){
        //human win
        if (humanChoice == choices[0] && computerChoice == choices[2] ||
            humanChoice == choices[1] && computerChoice == choices[0]  ||
            humanChoice == choices[2] && computerChoice == choices[1]){
                humanScore++;
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            }
        //computer win
        else if (computerChoice == choices[0] && humanChoice == choices[2] ||
            computerChoice == choices[1] && humanChoice == choices[0]  ||
            computerChoice == choices[2] && humanChoice == choices[1]){
                computerScore++;
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
        //tie
        else{
            console.log("It's a tie!");
        }
    }

    for(let index = 0; index < 5; index++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(`Final Sc1ore: User ${humanScore} : Computer ${computerScore}`);
}

playGame();
