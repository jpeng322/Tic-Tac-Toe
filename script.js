// Tic Tac Toe game
//Two players - connect the 3 different things to win
//Have a class with player that can click and put a mark
// The player will have parameters- a mark
//clicking within the BOX field will cause a counter to increase by 1
//if counter is odd then player 1 goes, if the counter if 2 then player to goes
//each spot on the 3x3 board will have a value, the value will then be the index of the array for the board

//player one inputs 1, player 2 inputs value 2, loop through arrays and add and see if it equals to 3 or 6
//if 3, the  player 1 won, if 6 then player 2 won
let counter = 0



let playingField = [[0, 0, 0],
[0, 0, 0],
[0, 0, 0]];

console.log(playingField)
class Player {
    constructor(name, mark) {
        this.name = name;
        this.mark = mark;
        this.turn = false;
        this.hasWon = false;
    }

    //updates playingField array with value associated with player
    updateField(e) {
        const boxVal = e.target.value
        const playerOneTurn = counter % 2 === 0
        if (boxVal === "0") {
            if (playerOneTurn) {
                firstRow[0] = 1;
            } else {
                firstRow[0] = 10;
            }
        }
        if (boxVal === "1") {
            if (playerOneTurn) {
                firstRow[1] = 1;
            } else {
                firstRow[1] = 10;
            }
        }
        if (boxVal === "2") {
            if (playerOneTurn) {
                firstRow[2] = 1;
            } else {
                firstRow[2] = 10;
            }
        }
        if (boxVal === "3") {
            if (playerOneTurn) {
                secRow[0] = 1;
            } else {
                secRow[0] = 10;
            }
        }
        if (boxVal === "4") {
            if (playerOneTurn) {
                secRow[1] = 1;
            } else {
                secRow[1] = 10;
            }
        }
        if (boxVal === "5") {
            if (playerOneTurn) {
                secRow[2] = 1;
            } else {
                secRow[2] = 10;
            }
        }
        if (boxVal === "6") {
            if (playerOneTurn) {
                thirdRow[0] = 1;
            } else {
                thirdRow[0] = 10;
            }
        }
        if (boxVal === "7") {
            if (playerOneTurn) {
                thirdRow[1] = 1;
            } else {
                thirdRow[1] = 10;
            }
        }
        if (boxVal === "8") {
            if (playerOneTurn) {
                thirdRow[2] = 1;
            } else {
                thirdRow[2] = 10;
            }
        }
    }

    //adds a mark to the selected box
    marker(e) {
        counter += 1;
        e.target.innerHTML = this.mark;

    }

    whosTurn() {
        const allBox = document.getElementsByClassName("box")
        for (let i = 0; i < allBox.length; i++) {
            allBox[i].addEventListener("click", e => {
                if (this.turn) {
                    if (e.target.innerHTML === "") {
                        // console.log(e.target.innerHTML)
                        this.updateField(e);
                        this.marker(e);
                        this.turn = !this.turn;
                        checkWinner();
                        // console.log(e)
                        console.log(e.target.innerHTML)
                        console.log(`${this.name}, ${this.turn} ${counter}`)
                    }
                } else {
                    // console.log(takenAttr)
                    if (document.getElementsByClassName(`box ${[i]} `)[0].getAttribute("taken") === 'false') {
                        this.turn = !this.turn;
                        document.getElementsByClassName(`box ${[i]} `)[0].setAttribute("taken", true);
                    } else {
                        this.turn = this.turn;
                    } console.log(`${this.name}, ${this.turn} ${counter}`)
                }
                // console.log(counter)
            })
        }
    }
}

class theField {
    createField() {
        const container = document.querySelector(".container")

        for (let i = 0; i < 9; i++) {
            const box = document.createElement('div');
            box.className = `box ${i}`;
            box.value = `${i}`;
            // box.innerHTML = "<ion-icon class='circle' name='ellipse-outline'></ion-icon>";
            // box.innerHTML = "<ion-icon class='cross' name='close-outline'></ion-icon>"
            box.innerHTML = ""
            box.setAttribute('taken', false);
            container.appendChild(box);

        }
    }
}

const field = new theField;
field.createField();
const firstRow = playingField[0]
const secRow = playingField[1]
const thirdRow = playingField[2]
const player1 = new Player('Jacky', "<p><ion-icon class='circle' name='ellipse-outline'></ion-icon></p>");
const player2 = new Player('Mei', "<p><ion-icon class='cross' name='close-outline'></ion-icon></p>");
// const player1 = new Player('Jacky', "Jacky");
// const player2 = new Player('Mei', "mei");
player1.turn = true;
player1.whosTurn();
player2.whosTurn();


function checkHorizWin() {
    for (let i = 0; i < playingField.length; i++) {
        let sum = 0;
        for (let j = 0; j < playingField[i].length; j++) {
            sum += playingField[i][j];
        }
        if (sum === 3) {
            console.log(`${player1.name} has won!`);
            player1.hasWon = true;
        }
        if (sum === 30) {
            console.log(`${player2.name} has won!`);
            player2.hasWon = true;
        }
    };
}

function checkVertWin() {
    for (let i = 0; i < playingField.length; i++) {
        let sum = 0;
        for (let j = 0; j < playingField[i].length; j++) {
            sum += playingField[j][i];
        }
        if (sum === 3) {
            console.log(`${player1.name} has won!`);
            player1.hasWon = true;
        }
        if (sum === 30) {
            console.log(`${player2.name} has won!`);
            player2.hasWon = true;
        }
    }
}

function checkDiagWin() {
    if (firstRow[0] + secRow[1] + thirdRow[2] === 3) {
        console.log(`${player1.name} has won!`);
        player1.hasWon = true;
    }
    if (firstRow[0] + secRow[1] + thirdRow[2] === 30) {
        console.log(`${player2.name} has won!`);
        player2.hasWon = true;
    }
    if (firstRow[2] + secRow[1] + thirdRow[0] === 3) {
        console.log(`${player1.name} has won!`);
        player1.hasWon = true;
    }
    if (firstRow[2] + secRow[1] + thirdRow[0] === 30) {
        console.log(`${player2.name} has won!`);
        player2.hasWon = true;
    }
}

function checkTie() {
    if (counter === 9 && player1.hasWon === false && player2.hasWon === false) {
        console.log("It is a tie!");
    }
}

function checkWinner() {
    checkHorizWin();
    checkVertWin();
    checkDiagWin();
    checkTie();
    // console.log('checked');
    // console.log(player1.hasWon)
    // console.log(player2.hasWon)
}


// playGame()