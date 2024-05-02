const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const randomNum = Math.floor((Math.random()*3));  //random number (0-2)
    return choices[randomNum];
}

function getHumanChoice(){
    const choice = prompt("Enter 1 for rock, 2 for paper, 3 for scissors")-1;
    return choices[choice];
}


