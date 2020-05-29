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
const INITIALPOINT = 5
const WINPOINT = 10

/*----- app's state (variables) -----*/

let computerPoint = INITIALPOINT
let playerPoint = INITIALPOINT

//playerchoice large/small and even/odd
playerChoice = null

/*----- cached element references -----*/
let playerCard = document.querySelector('#player-card')
let computerCard = document.querySelector('#computer-card')
let nextRoundButton = document.createElement('button')
nextRoundButton.setAttribute('class', 'next-button')
let displayComPoint = document.querySelector('#computer-point')
let displayPlayerPoint = document.querySelector('#player-point')
let display = document.querySelector('#display')
let replayButton = document.querySelector('#reset')

/*----- event listeners -----*/

//click playercard and create a card
playerCard.addEventListener('click', function () {
  createCard(PLAYER)
})

let betButton = document.querySelector('#bet-button')
betButton.addEventListener('click', bet)

nextRoundButton.addEventListener('click', function () {
  document.querySelector('input[name="opt"]:checked').checked = false
  playerCard.classList.remove(playerCard.classList[2])
  computerCard.classList.remove(computerCard.classList[2])
  betButton.removeAttribute("disabled");
  initialize()
})

replayButton.addEventListener('click', reset)

/*----- functions -----*/

function initialize() {
  //      COMPUTER = classlist back-red;
  computerCard.classList.add('back-red')

  //      PLAYER = classlist back-blue;
  playerCard.classList.add('back-blue')
  //      id display = "Choose your bet and click on your bet"
  display = document.querySelector('#display')
  display.innerText = 'Check your card first and then choose bet'
  //      computer point = 5;

  displayComPoint.innerText = 'Computer points: ' + computerPoint
  //      player point = 5;
  displayPlayerPoint.innerText = 'Player points: ' + playerPoint
}

initialize()

//Create Card for computer and player
getSuit = function () {
  i = Math.floor(Math.random() * SUIT.length)
  return SUIT[i]
}

getNum = function () {
  i = Math.floor(Math.random() * NUM.length)
  return NUM[i]
}

function createCard(id) {
  let element = document.querySelector(id)
  if (id == '#player-card' && element.classList.contains('back-blue')) {
    element.classList.remove('back-blue')
    element.classList.add(getSuit() + getNum())
  } else if (id == '#computer-card' && element.classList.contains('back-red')) {
    element.classList.remove('back-red')
    element.classList.add(getSuit() + getNum())
  }
}

//find player choice
function findPlayerChoice() {
  let radio = document.getElementsByName('opt')
  for (var i = 0, length = radio.length; i < length; i++) {
    if (radio[i].checked) {
      // do whatever you want with the checked radio
      playerChoice = radio[i].value
      // only one radio can be logically checked, don't check the rest
      break
    }
  }
}

//compare card between player and computer

function compareCard() {
  numOfPlayerCard = playerCard.classList[2].substring(1)
  playerCardNum = NUM.indexOf(numOfPlayerCard)
  numOfComputerCard = computerCard.classList[2].substring(1)
  computerCardNum = NUM.indexOf(numOfComputerCard)

  if (playerChoice == 'large') {
    if (playerCardNum > computerCardNum) {
      displayMessage(1)
    } else {
      displayMessage(-1)
    }
  } else if (playerChoice == 'small') {
    if (playerCardNum < computerCardNum) {
      displayMessage(1)
    } else {
      displayMessage(-1)
    }
  } else if (playerChoice == 'equal') {
    if (playerCardNum == computerCardNum) {
      displayMessage(2)
    } else {
      displayMessage(-2)
    }
  }
}

//show Next round button
function nextRound() {
  nextRoundButton.innerText = 'Next Round'
  document.getElementById('display').appendChild(nextRoundButton)
}

//check win

function displayMessage(point) {
  playerPoint = playerPoint + point
  computerPoint = computerPoint - point
  if (playerPoint < WINPOINT && computerPoint < WINPOINT) {
    if (point > 0) {
      display.innerText = 'You gain:' + point + ' point(s)'
    }
    if (point < 0) {
      display.innerText = 'You lose:' + point * -1 + ' point(s)'
    }
    nextRound()
  } else if (playerPoint == WINPOINT) {
    display.innerText = display.innerText = 'You are the Winner!'
  } else if (computerPoint == WINPOINT) {
    display.innerText = display.innerText = 'Sorry, try again'
  }
  displayPlayerPoint.innerText = 'Player points: ' + playerPoint
  displayComPoint.innerText = 'Computer points: ' + computerPoint
}

//reset()
// COMPUTER = classlist back-red;
//      PLAYER = classlist back-blue;
//      id display = "Choose your bet and click on your bet"
//      computer point = 5;
//      player point = 5;

//after click bet
function bet() {
  findPlayerChoice()
  if (playerCard.classList.contains('back-blue') || playerChoice == null) {
    return
  } else {
    createCard(COMPUTER)
    compareCard()
    betButton.setAttribute("disabled", true);
  }
}

//reset()
function reset() {
  //      COMPUTER = classlist back-red;
  computerCard.removeAttribute('class')
  computerCard.setAttribute('class', 'card xlarge back-red')

  //      PLAYER = classlist back-blue;
  playerCard.removeAttribute('class')
  playerCard.setAttribute('class', 'card xlarge back-blue')
  //      id display = "Choose your bet and click on your bet"
  display.innerText = 'Check your card first and then choose bet'
  //clear radio choice
  document.querySelectorAll("input[name='opt']").forEach(input => {input.checked=false})
  //      computer point = 5;
  displayComPoint.innerText = 'Computer points: ' + INITIALPOINT
  //      player point = 5;
  displayPlayerPoint.innerText = 'Player points: ' + INITIALPOINT

  betButton.removeAttribute("disabled");
}
