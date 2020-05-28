/*----- constants -----*/
const player = 1
const computerPlayer = -1
const SUIT = ['d', 'h', 's', 'c']
const NUM = [
    'A',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    'J',
    'Q',
    'K',
]
const PLAYER = '#player-card'
const COMPUTER = '#computer-card'

/*----- app's state (variables) -----*/
computerPoint = 5;
playerPoint = 5;

//playerchoice large/small and even/odd
playerChoice = null;



/*----- cached element references -----*/
let playerCard = document.querySelector('#player-card');
let computerCard = document.querySelector('#computer-card');
let nextRoundButton=document.createElement('button');




/*----- event listeners -----*/

//click playercard and create a card
playerCard.addEventListener('click', function () {
    createCard(PLAYER);
})

let betButton = document.querySelector('#bet-button')
betButton.addEventListener('click',bet);


nextRoundButton.addEventListener('click',function(){
    document.querySelector('input[name="opt"]:checked').checked = false;
    playerCard.classList.remove(playerCard.classList[1]);
    computerCard.classList.remove(computerCard.classList[1]);
    initialize();
})

//click on bet button
// if (large or small && odd or even not clicked){
// return}
// else {checkLargeSmall () && checkEvenOdd}
// display { 'you gain ${}'
// }

// betSelect.addEventListener('click', compare)

/*----- functions -----*/

function initialize() {
    //      COMPUTER = classlist back-red;
    computerCard.classList.add('back-red');

    //      PLAYER = classlist back-blue;
    playerCard.classList.add('back-blue');
    //      id display = "Choose your bet and click on your bet"
    display = document.querySelector('#display');
    display.innerText = 'Check your card first and then choose bet';
    //      computer point = 5;
    displayComPoint = document.querySelector('#computer-point');
    
    displayComPoint.innerText = 'Computer points: ' + computerPoint;
    //      player point = 5;
    displayPlayerPoint = document.querySelector('#player-point');
    displayPlayerPoint.innerText = 'Player points: ' + playerPoint;
    //remove classList

}

initialize()

//Create Card for computer and player
getSuit = function () {
    i = Math.floor(Math.random() * SUIT.length)
    return SUIT[i];
}

getNum = function () {
    i = Math.floor(Math.random() * NUM.length)
    return NUM[i];
}

function createCard(id) {
    let element = document.querySelector(id)
    if (id == '#player-card' && element.classList.contains('back-blue')) {
        element.classList.remove('back-blue');
        element.classList.add(getSuit() + getNum())
    } else if (id == '#computer-card' && element.classList.contains('back-red')) {
        element.classList.remove('back-red');
        element.classList.add(getSuit() + getNum())
    }
}


//find player choice
function findPlayerChoice() {
    let radio = document.getElementsByName('opt');
    for (var i = 0, length = radio.length; i < length; i++) {
        if (radio[i].checked) {
            // do whatever you want with the checked radio
            playerChoice = radio[i].value;
            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
}

//compare card between player and computer

function playerGain(point){
    playerPoint += point;
    computerPoint -=point;
    if (point>0){
        display.innerText = 'You gain:' + point + ' point(s)';
    }
    if (point<0){
        display.innerText = 'You lose:' + point*(-1) + ' point(s)'
    }
    
}


function compareCard(){
    numOfPlayerCard = playerCard.classList[1].substring(1);
    playerCardNum = NUM.indexOf(numOfPlayerCard);
    numOfComputerCard = computerCard.classList[1].substring(1);
    computerCardNum = NUM.indexOf(numOfComputerCard);

    if (playerChoice == 'large') {
        if (playerCardNum > computerCardNum) {
            playerGain(1)
            
        } else {
            playerGain(-1)
        }

    } else if (playerChoice == 'small') {
        if (playerCardNum < computerCardNum) {
           playerGain(1)
        } else {
            playerGain(-1)
        }
    } else if (playerChoice == 'equal') {
        if (playerCardNum == computerCardNum) {
            playerGain(2)
        } else {
            playerGain(-2)
        }
    }
    displayPlayerPoint.innerText = 'Player points: ' + playerPoint;
    displayComPoint.innerText = 'Computer points: ' + computerPoint;
}

//show Next round button
function nextRound (){
    nextRoundButton.innerText='Next Round';
    document.getElementById("display").appendChild(nextRoundButton);
}
//after click bet 
function bet() {
    findPlayerChoice();
    console.log(playerChoice);
    if(playerCard.classList.contains('back-blue')|| playerChoice == null){
        return;
    }
    else {createCard(COMPUTER);
        compareCard();
        nextRound();
    }
}


//check win
// checkWin(){
//     if (playerPoints=10) {
//         display.innerText  =  "You are the Winner!"
//         // display.style.'font-size' = 2vw;
//     reset()
//     }
//     if (computerPoints = 10) {
//         display.innerText = "Sorry, try again"
//         // display.style.'font-size' = 2vw;
//         reset()
//     }
// }

//reset()
// COMPUTER = classlist back-red;
//      PLAYER = classlist back-blue;
//      id display = "Choose your bet and click on your bet"
//      computer point = 5;
//      player point = 5;