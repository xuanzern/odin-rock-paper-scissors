const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const randomNum = Math.floor((Math.random()*3));  //random number (0-2)
    return choices[randomNum];
}

function getHumanChoice(){
    const choice = prompt("Enter 1 for rock, 2 for paper, 3 for scissors")-1; //prompt player for choice
    return choices[choice];
}

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
        console.log("It's a tie!")
    }
}

playRound(getHumanChoice(), getComputerChoice())
