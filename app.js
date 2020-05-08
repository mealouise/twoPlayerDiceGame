// 2 player logic

let playerOne = true;
// dont need playerTwo = false;

const playerTurn = () => {
    if (playerOne) { //mimicking a roll
        console.log("its now players twos turn")
        playerOne = false //player 2 true
    } else {
        console.log("its now player ones turn")
        playerOne = true;
    }
   
}

const buttonPressed = () => {
    playerTurn()
}

// playerTurn();

buttonPressed(); //checking whos turn it is and if true means now false
buttonPressed();
buttonPressed();
buttonPressed();