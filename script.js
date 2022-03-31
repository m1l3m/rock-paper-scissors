let playerScore = 0;
let computerScore = 0;

const playerScore_span = document.getElementById('player-score');
const computerScore_span = document.getElementById('computer-score');
const scoreboard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

//functions
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function convert(iWant) {
    if (iWant === 'paper')
        return 'Paper';


    if (iWant === 'scissors')
        return 'Scissors';


    return 'Rock'
}

// Winning Condition - this handles what happens when the player clicks one of the choices where the value is them passed through as a parameter  
function win(player, computer) {
    playerScore++;
    // console.log('player score is ' + playerScore + ' ' + player);  
    playerScore_span.innerHTML = playerScore;
    const playerName = ' (player)'.fontsize(3).sup();
    const compName = ' (comp)'.fontsize(3).sup();
    result_div.innerHTML = `<p>${convert(player)}${playerName} beats ${convert(computer)}${compName}. You win!</p>`;
    const roundStatus = document.getElementById(player);
    roundStatus.classList.add('winningStyles');
    setTimeout(() => roundStatus.classList.remove('winningStyles'), 300);
}
// Losing Condition - this handles what happens when the player clicks one of the choices where the value is them passed through as a parameter  
function loses(player, computer) {
    computerScore++;
    // console.log('computer score is ' + computerScore + ' ' + computer);  
    computerScore_span.innerHTML = computerScore;
    const playerName = ' (player)'.fontsize(3).sup();
    const compName = ' (comp)'.fontsize(3).sup();
    result_div.innerHTML = `<p>${convert(computer)}${compName} beats ${convert(player)}${playerName}. You lose!</p>`;
    const roundStatus = document.getElementById(player);
    roundStatus.classList.add('losingStyles');
    setTimeout(() => roundStatus.classList.remove('losingStyles'), 300);
}
// Draw Condition - this handles what happens when the player clicks one of the choices where the value is them passed through as a parameter  
function draw(player, computer) {
    const playerName = ' (player)'.fontsize(3).sup();
    const compName = ' (comp)'.fontsize(3).sup();
    result_div.innerHTML = `<p>It was a draw! You both chose ${convert(player)}</p>`;
    // "It was a draw! You both chose " + player + " " + computer; // old js  
    const roundStatus = document.getElementById(player);
    roundStatus.classList.add('drawStyles');
    setTimeout(() => roundStatus.classList.remove('drawStyles'), 300);
}
// The core game functions that set up and determine the games actual logic aka paper beats rock etc  
function game(playerChoice) {
    const computerChoice = getComputerChoice();
    // console.log('Game function: player choice is = ' + playerChoice);  
    // console.log('Game function: computer choice is = ' + computerChoice);  
    switch (playerChoice + computerChoice) {
        case 'paperrock':
        case 'rockscissors':
        case 'scissorspaper':
            win(playerChoice, computerChoice);
            // console.log("player wins");  
            break;
        case 'rockpaper':
        case 'scissorsrock':
        case 'paperscissors':
            loses(playerChoice, computerChoice);
            // console.log("computer wins");  
            break;
        case 'rockrock':
        case 'scissorsscissors':
        case 'paperpaper':
            draw(playerChoice, computerChoice);
            // console.log("draw");  
            break;
    }
}
// ES5 style of writing this function  
// function main() {  
//  rock_div.addEventListener('click', function() {  
//   game('rock');  
//  });  
//  paper_div.addEventListener('click', function() {  
//   game('paper');  
//  });  
//  scissors_div.addEventListener('click', function() {  
//   game('scissors');  
//  });  
// }  
// ES6 style of writing this function  
// This function creates and adds an eventlistener to the rock, paper scissors html element and the passes the value of that element to the game function  
function main() {
    rock_div.addEventListener('click', () => game('rock'));
    paper_div.addEventListener('click', () => game('paper'));
    scissors_div.addEventListener('click', () => game('scissors'));
}
main();