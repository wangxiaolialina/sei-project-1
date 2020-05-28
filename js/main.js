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
computerPoint = 5
playerPoint = 5

playerCard = document.querySelector('#player-card')
computerCard = document.querySelector('#computer-card')

/*----- cached element references -----*/

/*----- event listeners -----*/

playerCard.addEventListener('click', function () {
  createCard(PLAYER)
})

// 'click' playercard run createCard

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
  computerCard.classList.add('back-red')

  //      PLAYER = classlist back-blue;
  playerCard.classList.add('back-blue')
  //      id display = "Choose your bet and click on your bet"
  let display = document.querySelector('#display')
  display.innerText = 'Check your card first and then choose bet'
  //      computer point = 5;
  displayComPoint = document.querySelector('#computer-point')
  displayComPoint.innerText = 'Computer points: ' + computerPoint

  //      player point = 5;
  displayComPoint = document.querySelector('#player-point')
  displayComPoint.innerText = 'Player points: ' + playerPoint
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
    element.classList.remove('back-blue');
    element.classList.add(getSuit() + getNum())
  } else if (id == '#player-card' && element.classList.contains('back-red')){
    element.classList.remove('back-red');
    element.classList.add(getSuit() + getNum())
  }
}

//compare Card

// compareLargeSmall(){
//     if (checked large){
//         if (playercard > computercard){
//             playerpoint += 1;
//         }else {
//             playerpoint -= 1;
//         }

//     } if (checked small){
//     if (playercard < computercard){
//         playerpoint += 1;
//     }else {
//         playerpoint -= 1;
//     }

// }
// compareEvenOdd(){
//     if (checked even){
//         if computercard = even{
//             player += 1
//         }else{
//             player -= 1;
//         }
//     }
//     if (player checked odd) {
//         if (computerCard = odd){
//             playerpoint +=1
//         }else{
//             playepoint-+1
//         }
//     }
// }

//check win
// checkWin(){
//     if (player points=10){
//     displayResult =  "you are the Winner"
//     reset()
//     }
//     if (computer points = 10) {
//         displayResult = "Sorry, try again"
//         reset()
//     }
// }

//reset()
// COMPUTER = classlist back-red;
//      PLAYER = classlist back-blue;
//      id display = "Choose your bet and click on your bet"
//      computer point = 5;
//      player point = 5;
