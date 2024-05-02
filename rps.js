function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor((Math.random()*3))+1;
    return choices[randomNum];
}

console.log(getComputerChoice())