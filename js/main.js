/*----- constants -----*/
const player = 1;
const computerPlayer = -1;
const SUIT = ['d','h','s','c'];
const NUM = ['A','02','03','04','05','06','07','08','09','10','J','Q','K'];
const PLAYER = 'playerCard'
const COMPUTER = 'computerCard'



/*----- app's state (variables) -----*/
computerPoint = 0;
playerPoint = 0;


/*----- cached element references -----*/



/*----- event listeners -----*/


'click' playercard run createCard

//click on bet button
if (large or small && odd or even not clicked){
return}
else {checkLargeSmall () && checkEvenOdd}
display { 'you gain ${}'
}



// betSelect.addEventListener('click', compare)

/*----- functions -----*/


 function initialize(){
     COMPUTER = classlist back-red; 
     PLAYER = classlist back-blue;
     id display = "Choose your bet and click on your bet"
     computer point = 5;
     player point = 5;

 }





//Create Card for computer and player
getSuit = function () {
    i=Math.floor((Math.random() * (SUIT.length)));
    return SUIT[i];
}

getNum = function(){
    i = Math.floor((Math.random() * (NUM.length)));
    return NUM[i];
}


function createCard (id) {
    let element = document.querySelector(id);
    if (id == 'playerCard'){
        element.classList.remove("back-blue")
    }else {
        element.classList.remove("back-red")
    }
    element.classList.add(getSuit()+getNum());
}

createCard(PLAYER);
createCard(COMPUTER);

//compare Card

compareLargeSmall(){
    if (checked large){  
        if (playercard > computercard){
            playerpoint += 1;
        }else {
            playerpoint -= 1;
        }

    } if (checked small){
    if (playercard < computercard){
        playerpoint += 1;
    }else {
        playerpoint -= 1;
    }

}
compareEvenOdd(){
    if (checked even){
        if computercard = even{
            player += 1
        }else{
            player -= 1;
        }
    }
    if (player checked odd) {
        if (computerCard = odd){
            playerpoint +=1
        }else{
            playepoint-+1
        }
    }
}
    
//check win
checkWin(){
    if (player points=10){
    displayResult =  "you are the Winner"
    reset()
    }
    if (computer points = 10) {
        displayResult = "Sorry, try again"
        reset()
    }
}



//reset()
COMPUTER = classlist back-red; 
     PLAYER = classlist back-blue;
     id display = "Choose your bet and click on your bet"
     computer point = 5;
     player point = 5;