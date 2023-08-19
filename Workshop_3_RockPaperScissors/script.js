/**
 * Computes result of the game. returns victory message if move 1 wins.
 * @param  {Number}   move1  move 1
 * @param  {Number}   move2  move 2
 * @return {String}   result result of the game
 */
let winmsg="Victory";
let losemsg="Crushing Defeat";
let tiemsg="Tie";

let moveDisplay=document.querySelectorAll('.move-display h2');
let buttons=document.querySelectorAll('button');
let statusDisplay=document.querySelector('#status-head');

let movelist=['Rock','Paper','Scissors']

function startGame(){
    statusDisplay.textContent="CHOOSE!"

    for(let i=0; i<buttons.length; i++){
        buttons[i].textContent=movelist[i];
        buttons[i].style.display="inline-block";
        buttons[i].onclick = endGame;
    }
    document.querySelector('.move-display').style.display = "none";
}

function calcResult(move1, move2){

    if (move1 == move2) {
        statusDisplay.textContent = 'Tie!'
        moveDisplay[0].textContent = 'You played ' + movelist[move1];
        moveDisplay[1].textContent = 'Computer played ' + movelist[move2];

    } else if (move1 == 2 && move2 == 1){
        statusDisplay.textContent = winmsg;
        moveDisplay[0].textContent = 'You played ' + movelist[2];
        moveDisplay[1].textContent = 'Computer played ' + movelist[1];

    }else if (move1 == 1 && move2 == 0){
        statusDisplay.textContent = winmsg;
        moveDisplay[0].textContent = 'You played ' + movelist[1];
        moveDisplay[1].textContent = 'Computer played ' + movelist[0];

    }else if (move1 == 0 && move2 == 2){
        statusDisplay.textContent = winmsg;
        moveDisplay[0].textContent = 'You played ' + movelist[0];
        moveDisplay[1].textContent = 'Computer played ' + movelist[2];

    }else{
        statusDisplay.textContent = losemsg;
        moveDisplay[0].textContent = 'You played ' + movelist[move1];
        moveDisplay[1].textContent = 'Computer played ' + movelist[move2];
    }

    
}

/**
 * @return {Number}   random number between 0 and 2
 */

function randomMove() {
    return Math.floor(Math.random() * 3);
}

/**
 * Displays start state of game
 */

/**
 * Displays end state of game
 * @param {Event} event event containing information of users input.
 */
function endGame(event){

    let btnClicked=event.target.innerText;
    let playermove = movelist.indexOf(btnClicked)
    let move1 = playermove

    let computermove = randomMove();
    let move2 = computermove
    document.querySelector('.move-display').style.display = "";
    calcResult(move1, move2)

    let buttons = document.querySelectorAll('button');
    buttons[0].style.display = "none";
    buttons[1].innerText = "Play Again"
    buttons[1].onclick = startGame;
    buttons[2].style.display = "none";
}

startGame();