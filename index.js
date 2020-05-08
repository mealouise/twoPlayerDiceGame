const rollButton = document.getElementById("roll");
const playerOneScore = document.getElementById("playerOneScore");
const playerTwoScore = document.getElementById("playerTwoScore");
const playerOneTotalScore = document.getElementById("playerOneTotalScore");
const playerTwoTotalScore = document.getElementById("playerTwoTotalScore");
const diceImage = document.getElementById("diceImage");
const playerOneStatus = document.getElementById("playerOneStatus");
const playerTwoStatus = document.getElementById("playerTwoStatus");
const boardOne = document.getElementById("boardOne");
const boardTwo = document.getElementById("boardTwo");


let numberRolled;
let playerOnePoints = 0;

let playerTwoPoints = 0;

let player = "p1";

/**
the changeplayer function takes the player variable and first checks if its player 1
If it is the function will update the player variable to player 2. 
otherwise it means the player is player 2 so the function will update to player 1
 */
const changePlayer = () => {
    if ( player === "p1") { 
        player = "p2";
        console.log("its now players twos turn");
        playerTwoStatus.textContent = "Player 2's turn";
        boardOne.style.backgroundColor = "orange";
        boardTwo.style.backgroundColor = "white"
    } else {
        player = "p1";
        console.log("its now player ones turn");
        playerOneStatus.textContent = "Player 1's turn";
        boardTwo.style.backgroundColor = "orange";
        boardOne.style.backgroundColor = "white"
    }
   
}


const diceRoll = () => {
    numberRolled = Math.ceil(Math.random() * 6);
    console.log(`number rolled is ${numberRolled}`);
    updateScore();
}

const reset = () => {
    if (player === "p1") {
        playerOnePoints = 0;
    } else {
        playerTwoPoints = 0;
    }
}
// simplified to player takes turn and 1st to roll 20 or more
const updateScore = () => {
    if (player === "p1") { // 3 tripe equals for when variable is a string
        // playerOnePoints += numberRolled;
        playerOnePoints += numberRolled;
        console.log(`players 1 score is ${playerOnePoints}`);
        playerOneScore.textContent = playerOnePoints;
        checkWinner();
    } else {
        // playerTwoPoints += numberRolled;
        playerTwoPoints += numberRolled;
        console.log(`players 2 score is ${playerTwoPoints}`);
        playerTwoScore.textContent = playerTwoPoints;
        checkWinner();
    }
}

const checkWinner = () => {
    if (playerOnePoints >= 20) {
        console.log("Player 1 has won!");
        playerOneStatus.textContent = "Winner!";
        reset();
    } else if (playerTwoPoints >= 20) {
        console.log("Player 2 has won!");
        playerTwoStatus.textContent = "winner!"
        reset();
    } else {
        console.log("Carry on playing");
    }
}


rollButton.addEventListener("click", () => {
    
    diceRoll();
    changePlayer();
    // updateScore();
   
    
    
    
    
    diceImage.src = `img/dice${numberRolled}.png`;
})