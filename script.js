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
let sidesPicked = 0


let playingField = [[0, 0, 0],
[0, 0, 0],
[0, 0, 0]];

// console.log(playingField)
class Player {
    constructor(name) {
        this.name = name;
        this.mark = '';
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
        // console.log(e.target.value)
    }

    pickMarker() {
        let buttons = document.querySelectorAll(".button")
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                // console.log('haha')
                if (this.mark === "" && buttons[i].disabled !== true) {
                    this.mark = buttons[i];
                    const selBtnArray = buttons[i].className.split(' ')
                    const buttonClass = `${selBtnArray[0]} ${selBtnArray[1]}`
                    const leftButton = document.querySelector(`.${selBtnArray[0]}.${selBtnArray[1]}.left`)
                    const rightButton = document.querySelector(`.${selBtnArray[0]}.${selBtnArray[1]}.right`)
                    leftButton.disabled = true;
                    rightButton.disabled = true;
                    const selectedOptions = [leftButton, rightButton];
                    selectedOptions.forEach(option => {
                        if (option.className === buttons[i].className) { option.style.border = "2px solid grey"; }
                    })
                    const selectedSideBtns = document.querySelectorAll(`.button.${selBtnArray[2]}`)
                    selectedSideBtns.forEach(button => {
                        if (button.className !== buttons[i].className) {
                            button.disabled = true;
                        }
                    })
                    sidesPicked += 1
                }
                // for (i = 0; i < buttons.length; i++) {
                //     if (buttons[i].disabled === true) {
                //         buttonsDisabled += 1
                //     }
                // }
                // console.log(buttonsDisabled)
            })
        }
    }
    hoverMarker() {
        const allBox = document.getElementsByClassName("box")
        for (let i = 0; i < allBox.length; i++) {
            allBox[i].addEventListener("mouseenter", (e) => {
                // console.log(e.target.value)
                if (sidesPicked === 2 && this.turn && document.getElementsByClassName(`box ${[i]}`)[0].getAttribute("taken") === 'false' && this.mark !== "") {
                    // this.mark.classList.add("darkened")
                    // console.log(typeof this.mark.innerHTML)
                    let htmlObject = document.createElement("div")
                    htmlObject.innerHTML = `${this.mark.innerHTML}`
                    // console.log(htmlObject)
                    htmlObject.childNodes[1].classList.add("darkened")
                    // child[1].classList.add("darkened")
                    // console.log(child)
                    // console.log(htmlObject.innerHTML)
                    // e.target.innerHTML = htmlObject.childNodes[1].toString()
                    // console.log(htmlObject.childNodes[1].toString())
                    e.target.innerHTML = htmlObject.innerHTML
                    console.log(htmlObject.innerHTML)
                }
            })
            allBox[i].addEventListener("mouseleave", (e) => {
                // console.log(e.target.textContent)
                if (this.turn) {
                    if (document.getElementsByClassName(`box ${[i]}`)[0].getAttribute("taken") === 'false') {
                        e.target.innerHTML = "";
                    }
                }
            })
        }
    }


    //adds a mark to the selected box
    putMarker(e) {
        counter += 1;
        e.target.innerHTML = this.mark.innerHTML;


    }

    whosTurn() {
        const allBox = document.getElementsByClassName("box")
        for (let i = 0; i < allBox.length; i++) {
            allBox[i].addEventListener("click", e => {
                // console.log(`${this.name} ${this.turn} before`)
                const inGame = document.querySelector(".gamebtn").getAttribute("ingame")
                if (sidesPicked === 2 && inGame === "true" && this.mark !== "") {
                    if (this.turn) {
                        e.target.classList.remove("darkened")
                        // console.log(e.target.textContent === "")
                        // console.log(e.target.textContent)
                        // if (e.target.textContent === "") 
                        if (document.getElementsByClassName(`box ${[i]}`)[0].getAttribute("hovering") === "true") {
                            document.getElementsByClassName(`box ${[i]}`)[0].setAttribute("hovering", false)
                            this.putMarker(e);
                            this.turn = !this.turn;
                            // console.log(`${this.name} ${this.turn}`)
                            e.target.value = `${i}`
                            // console.log(e.target)
                            this.updateField(e);
                            checkWinner();
                            endOfGame();
                            // console.log(this.mark.innerHTML)
                            // this.hoverMarker();
                            // console.log(e)
                            // console.log(e.target.value)
                            // console.log(playingField)
                            // console.log(this.mark.classList.add("darkened"))
                            // console.log(this.mark.textContent)
                        }
                    } else {
                        // console.log(takenAttr)
                        if (document.getElementsByClassName(`box ${[i]}`)[0].getAttribute("taken") === "false") {
                            this.turn = !this.turn;
                            document.getElementsByClassName(`box ${[i]}`)[0].setAttribute("taken", true);
                        } else {
                            this.turn = this.turn;
                        }
                        console.log(`${this.name} ${this.turn}`)
                    }
                }
                // console.log(`${this.name} ${this.turn} after`)
            })
        }
    }
}

class theField {
    createField() {
        const container = document.querySelector("#container")

        for (let i = 0; i < 9; i++) {
            const box = document.createElement('div');
            box.className = `box ${i}`;
            box.id = `box-${i}`
            box.value = `${i}`;
            // box.innerHTML = "<ion-icon class='circle' name='ellipse-outline'></ion-icon>";
            // box.innerHTML = "<ion-icon class='cross' name='close-outline'></ion-icon>"
            box.innerHTML = ""
            box.setAttribute('taken', false);
            box.setAttribute("hovering", true)
            container.appendChild(box);

        }
    }
    clearField() {
        for (let i = 0; i < 9; i++) {

        }
    }
}

const field = new theField;
const markers = document.querySelectorAll(".markersBeforeGame");
// console.log(markers)
const gameState = document.querySelector(".gamebtn").getAttribute("ingame");
const container = document.querySelector("#container");
field.createField();
let firstRow = playingField[0]
let secRow = playingField[1]
let thirdRow = playingField[2]
// const player1 = new Player(document.getElementById("playerOne").value);
// const player2 = new Player(document.getElementById("playerTwo").value);
const player1 = new Player("");
const player2 = new Player("");
player1.turn = true;
player1.pickMarker();
player2.pickMarker();
player1.whosTurn();
player2.whosTurn();
player1.hoverMarker()
player2.hoverMarker()
const playerOneInput = document.getElementById("playerOne")
const playerTwoInput = document.getElementById("playerTwo")


function checkHorizWin() {
    for (let i = 0; i < playingField.length; i++) {
        let sum = 0;
        for (let j = 0; j < playingField[i].length; j++) {
            sum += playingField[i][j];
        }
        if (sum === 3) {
            // console.log(`${player1.name} has won!`);
            player1.hasWon = true;
        }
        if (sum === 30) {
            // console.log(`${player2.name} has won!`);
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
            // console.log(`${player1.name} has won!`);
            player1.hasWon = true;
        }
        if (sum === 30) {
            // console.log(`${player2.name} has won!`);
            player2.hasWon = true;
        }
    }
}

function checkDiagWin() {
    if (firstRow[0] + secRow[1] + thirdRow[2] === 3) {
        // console.log(`${player1.name} has won!`);
        player1.hasWon = true;
    }
    if (firstRow[0] + secRow[1] + thirdRow[2] === 30) {
        // console.log(`${player2.name} has won!`);
        player2.hasWon = true;
    }
    if (firstRow[2] + secRow[1] + thirdRow[0] === 3) {
        // console.log(`${player1.name} has won!`);
        player1.hasWon = true;
    }
    if (firstRow[2] + secRow[1] + thirdRow[0] === 30) {
        // console.log(`${player2.name} has won!`);
        player2.hasWon = true;
    }
}

function checkTie() {
    if (counter === 9 && player1.hasWon === false && player2.hasWon === false) {
        // console.log("It is a tie!");
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
const gamebutton = document.querySelector(".gamebtn")
gamebutton.setAttribute("inGame", false)
gamebutton.addEventListener("click", () => {
    player1.name = playerOneInput.value
    player2.name = playerTwoInput.value
    if (player1.name !== "" && player2.name !== "") {
        resetButton();
        clearField();
        document.querySelector("#container").className = "container"
    }
})

function resetButton() {
    gamebutton.setAttribute("inGame", true)
    gamebutton.style.display = "none"
    markers.forEach(marker => marker.className = "markers")
}

function endOfGame() {
    if (player1.hasWon === true || player2.hasWon === true || counter === 9 && player1.hasWon === false && player2.hasWon === false) {
        // console.log("end game")
        gamebutton.textContent = "Play Again";
        gamebutton.style.display = "block";
        gamebutton.setAttribute("inGame", false)
        playingField = [[0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]];
        firstRow = playingField[0]
        secRow = playingField[1]
        thirdRow = playingField[2]
    }
}
function clearField() {
    const fieldBoxes = document.querySelectorAll(".box")
    // fieldBoxes.forEach(box => {
    //     box.setAttribute("taken", false);
    //     box.removeChild(box.querySelector("ion-icon"));
    //     box.innerHTML = "";
    // })
    for (let i = 0; i < 9; i++) {
        fieldBoxes[i].setAttribute("taken", false);
        fieldBoxes[i].setAttribute("hovering", true);
        if (fieldBoxes[i].childNodes.length > 0) {
            fieldBoxes[i].removeChild(fieldBoxes[i].querySelector("ion-icon"));
            fieldBoxes[i].innerHTML = "";
        }
    }
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
        button.disabled = false;
        button.style.border = "none";
    })
    // field.createField();
    playerTags()
    player1.turn = true;
    player2.turn = false;
    player1.mark = '';
    player2.mark = '';
    player1.hasWon = false;
    player2.hasWon = false;
    player1.pickMarker();
    player2.pickMarker();
    player1.whosTurn();
    player2.whosTurn();
    counter = 0
    sidesPicked = 0
    // reload()
}

function playerTags() {
    player1.name = playerOneInput.value
    player2.name = playerTwoInput.value
    // const inGame = document.querySelector(".gamebtn").getAttribute("ingame")
    playerOneInput.style.display = "none";
    playerTwoInput.style.display = "none";
    playerOneHead = document.querySelector(".player1");
    playerOneHead.textContent = player1.name.toUpperCase()
    playerTwoHead = document.querySelector(".player2");
    playerTwoHead.textContent = player2.name.toUpperCase()
    const logo = document.querySelector(".logos");
    logo.style.display = "none";

}

// const buttons = document.querySelectorAll('button')

function beforeGameField() {
    if (gameState !== "true") {
        container.className = "container-beforeGame"

    }
}
beforeGameField()
