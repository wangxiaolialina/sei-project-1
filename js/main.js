/*----- constants -----*/
const player = 1;
const computerPlayer = -1;
const SUIT = ['d','h','s','c'];
const NUM = ['A','02','03','04','05','06','07','08','09','10','J','Q','K'];


/*----- app's state (variables) -----*/
computerPoint = 0;
playerPoint = 0;


/*----- cached element references -----*/



/*----- event listeners -----*/



/*----- functions -----*/
initialize();

function createCard()


/*click list of bet button */
betSelect=document.querySelectorAll('.bet button')

betSelect.addEventListener{'click', buttonSelect}

function buttonSelect(event) {
    betSelect.forEach(function(button){
        button.classList.remove('active')
    })

    event.target.setAttribute('class','active')

}


//test lalalala 