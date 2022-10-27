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
        // const boxValue = e.target.value
        if (e.target.value === "0") {
            if (counter % 2 === 0) {
                playingField[0][0] = 1;
            } else {
                playingField[0][0] = 10;
            }
        }
        if (e.target.value === "1") {
            if (counter % 2 === 0) {
                playingField[0][1] = 1;
            } else {
                playingField[0][1] = 10;
            }
        }
        if (e.target.value === "2") {
            if (counter % 2 === 0) {
                playingField[0][2] = 1;
            } else {
                playingField[0][2] = 10;
            }
        }
        if (e.target.value === "3") {
            if (counter % 2 === 0) {
                playingField[1][0] = 1;
            } else {
                playingField[1][0] = 10;
            }
        }
        if (e.target.value === "4") {
            if (counter % 2 === 0) {
                playingField[1][1] = 1;
            } else {
                playingField[1][1] = 10;
            }
        }
        if (e.target.value === "5") {
            if (counter % 2 === 0) {
                playingField[1][2] = 1;
            } else {
                playingField[1][2] = 10;
            }
        }
        if (e.target.value === "6") {
            if (counter % 2 === 0) {
                playingField[2][0] = 1;
            } else {
                playingField[2][0] = 10;
            }
        }
        if (e.target.value === "7") {
            if (counter % 2 === 0) {
                playingField[2][1] = 1;
            } else {
                playingField[2][1] = 10;
            }
        }
        if (e.target.value === "8") {
            if (counter % 2 === 0) {
                playingField[2][2] = 1;
            } else {
                playingField[2][2] = 10;
            }
        }
        // console.log(playingField)
    }

    //adds a mark to the selected box
    marker(e) {
        counter += 1;
        e.target.textContent = this.mark;

    }

    whosTurn() {
        const allBox = document.getElementsByClassName("box")
        for (let i = 0; i < allBox.length; i++) {
            // let takenAttr = document.getElementsByClassName(`box ${ [i] } `)[0].getAttribute("taken")
            allBox[i].addEventListener("click", e => {
                // console.log(document.getElementsByClassName(`box ${ [i] } `)[0].getAttribute("taken"))
                if (this.turn) {
                    // console.log(e.target.textContent)
                    if (e.target.textContent === '1') {
                        this.updateField(e);
                        this.marker(e);
                        this.turn = !this.turn;
                        checkWinner()
                        // if (counter === 9) {
                        //     checkWinner()
                        // }
                        // console.log(`${this.name}, ${this.turn}, ${counter} `)
                    } else {
                        // console.log('return')
                        return
                    }
                } else {
                    // console.log(takenAttr)
                    if (document.getElementsByClassName(`box ${[i]} `)[0].getAttribute("taken") === 'false') {
                        this.turn = !this.turn;
                        document.getElementsByClassName(`box ${[i]} `)[0].setAttribute("taken", true);
                    } else {
                        this.turn = this.turn;
                    }
                }
                console.log(counter)
            })
        }
    }
}

class theField {
    createField() {
        const container = document.querySelector(".container")

        for (let i = 0; i < 9; i++) {
            const box = document.createElement('div');
            box.className = `box ${i}`
            box.value = `${i}`;
            box.textContent = '1';
            box.setAttribute('taken', false);
            container.appendChild(box);

        }
    }
}

const field = new theField
field.createField()
const player1 = new Player('Jacky', 'JACKY')
const player2 = new Player('Mei', 'Mei')
player1.turn = true
player1.whosTurn()
player2.whosTurn()

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
            `${player1.name} has won!`;
            player1.hasWon = true;
        }
        if (sum === 30) {
            `${player2.name} has won!`;
            player2.hasWon = true;
        }
    }
}

// 0,0 + 1, 0 + 2,0
function checkDiagWin() {
    if (playingField[0][0] + playingField[1][1] + playingField[2][2] === 3) {
        console.log(`${player1.name} has won!`);
        player1.hasWon = true;
    }
    if (playingField[0][0] + playingField[1][1] + playingField[2][2] === 30) {
        console.log(`${player2.name} has won!`);
        player2.hasWon = true;
    }
    if (playingField[0][2] + playingField[1][1] + playingField[2][0] === 3) {
        console.log(`${player1.name} has won!`);
        player1.hasWon = true;
    }
    if (playingField[0][2] + playingField[1][1] + playingField[2][0] === 30) {
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
    // console.log('checked')
}


// playGame()