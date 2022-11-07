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
        const playerOneTurn = counter % 2 === 1
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


    //checks to see if the markers have been selected yet, if so disabled the other buttons
    pickMarker() {
        let buttons = document.querySelectorAll(".button")
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                if (this.mark === "" && buttons[i].disabled !== true) {
                    //makes the player's mark the selected button
                    this.mark = buttons[i].innerHTML;
                    const selBtnArray = buttons[i].className.split(' ')
                    //creates variables to disable the mark for both sides, i.e. if the left player takes circle, the right circle is also disabled
                    const leftButton = document.querySelector(`.${selBtnArray[0]}.${selBtnArray[1]}.left`)
                    const rightButton = document.querySelector(`.${selBtnArray[0]}.${selBtnArray[1]}.right`)
                    leftButton.disabled = true;
                    rightButton.disabled = true;
                    const selectedOptions = [leftButton, rightButton];
                    //outlines the button that is selected
                    selectedOptions.forEach(option => {
                        if (option.className === buttons[i].className) { option.style.border = "2px solid grey"; }
                    })
                    //disables all-non selected buttons
                    const selectedSideBtns = document.querySelectorAll(`.button.${selBtnArray[2]}`)
                    selectedSideBtns.forEach(button => {
                        if (button.className !== buttons[i].className) {
                            button.disabled = true;
                        }
                    })
                    sidesPicked += 1
                }
            })
        }
    }

    //shows the mark of the next player's turn on the hovered box
    hoverMarker() {
        const allBox = document.getElementsByClassName("box")
        for (let i = 0; i < allBox.length; i++) {
            allBox[i].addEventListener("mouseenter", (e) => {
                //when entered, if both marks are picked, if the player picking has a mark selected, and the box is not taken, the box will show the player's selected mark as it hovers over the entered box
                if (sidesPicked === 2 && this.turn && document.getElementsByClassName(`box ${[i]}`)[0].getAttribute("taken") === "false" && this.mark !== "") {
                    //creates a div and makes innerHTML of it the mark's text so that it becomes a node, adds class darkened to the node that darkens the mark
                    let markDiv = document.createElement("div")
                    markDiv.innerHTML = `${this.mark}`
                    markDiv.childNodes[1].classList.add("darkened")
                    e.target.innerHTML = markDiv.innerHTML
                }
            })
            allBox[i].addEventListener("mouseleave", (e) => {
                //when exited, the hovered darkened mark will disappear since e.target.HTML will be empty if the box has not been selected already
                if (this.turn) {
                    if (document.getElementsByClassName(`box ${[i]}`)[0].getAttribute("taken") === "false") {
                        e.target.innerHTML = "";
                    }
                }
            })
        }
    }


    //puts down the mark on the selected box
    putMarker(e) {
        counter += 1;
        e.target.innerHTML = this.mark;
    }

    playTurn() {
        const allBox = document.getElementsByClassName("box")
        for (let i = 0; i < allBox.length; i++) {
            allBox[i].addEventListener("click", e => {
                //if the game has started and both markers are picked, remove the darkened attribute to get the colored mark onto the selected box
                const inGame = document.querySelector(".gamebtn").getAttribute("ingame")
                if (sidesPicked === 2 && inGame === "true" && this.mark !== "") {
                    //if it is the players turn, put their chosen mark onto the box that was clicked, give the box a value associated with the player to determine 
                    //the winner for the future, change their turn false, and check whether there was a winner or not
                    if (this.turn) {
                        e.target.classList.remove("darkened")
                        if (document.getElementsByClassName(`box ${[i]}`)[0].getAttribute("hovering") === "true") {
                            document.getElementsByClassName(`box ${[i]}`)[0].setAttribute("hovering", false)
                            this.putMarker(e);
                            this.turn = !this.turn;
                            e.target.value = `${i}`;
                            this.updateField(e);
                            checkWinner();
                            endOfGame(e);
                        }
                        //if it is not the players turn, set the box's availibility to taken so the next player's turn cannot take it, then change their turn to true so they can go next
                    } else {
                        if (document.getElementsByClassName(`box ${[i]}`)[0].getAttribute("taken") === "false") {
                            this.turn = !this.turn;
                            document.getElementsByClassName(`box ${[i]}`)[0].setAttribute("taken", true);
                        } else {
                            this.turn = this.turn;
                        }
                    }
                    console.log(`${this.name}, ${this.turn}, ${counter}`)
                }
            })
        }
    }
}

//creates 3x3 box and gives attributes to each box
class theField {
    createField() {
        const container = document.querySelector("#container")
        for (let i = 0; i < 9; i++) {
            const box = document.createElement('div');
            box.className = `box ${i}`;
            box.id = `box-${i}`
            box.innerHTML = "";
            box.setAttribute('taken', false);
            box.setAttribute("hovering", true);
            container.appendChild(box);

        }
    }
}

const field = new theField;
const gameState = document.querySelector(".gamebtn").getAttribute("ingame");
const container = document.querySelector("#container");
field.createField();
let firstRow = playingField[0]
let secRow = playingField[1]
let thirdRow = playingField[2]
const player1 = new Player("");
const player2 = new Player("");
player1.turn = true;
player1.pickMarker();
player2.pickMarker();
player1.playTurn();
player2.playTurn();
player1.hoverMarker()
player2.hoverMarker()
const playerOneInput = document.getElementById("playerOne")
const playerTwoInput = document.getElementById("playerTwo")
const winnerText = document.querySelector(".winnerText")
//loops through all horizontal rows to see if there is 3 in a row
function checkHorizWin() {
    for (let i = 0; i < playingField.length; i++) {
        let sum = 0;
        for (let j = 0; j < playingField[i].length; j++) {
            sum += playingField[i][j];
        }
        if (sum === 3) {
            // console.log(`${player1.name} has won!`);
            // winnerText.textContent = `${player1.name} has won!`
            player1.hasWon = true;
        }
        if (sum === 30) {
            // console.log(`${player2.name} has won!`);
            // winnerText.textContent = `${player2.name} has won!`
            player2.hasWon = true;
        }
    };
}

//loops through all vertical rows to see if there is 3 in a row
function checkVertWin() {
    for (let i = 0; i < playingField.length; i++) {
        let sum = 0;
        for (let j = 0; j < playingField[i].length; j++) {
            sum += playingField[j][i];
        }
        if (sum === 3) {
            // console.log(`${player1.name} has won!`);
            player1.hasWon = true;
            // winnerText.textContent = `${player1.name} has won!`
        }
        if (sum === 30) {
            // console.log(`${player2.name} has won!`);
            // winnerText.textContent = `${player2.name} has won!`
            player2.hasWon = true;
        }
    }
}

//loops through all diagonal rows to see if there is 3 in a row
function checkDiagWin() {
    if (firstRow[0] + secRow[1] + thirdRow[2] === 3) {
        // console.log(`${player1.name} has won!`);
        // winnerText.textContent = `${player1.name} has won!`
        player1.hasWon = true;
    }
    if (firstRow[0] + secRow[1] + thirdRow[2] === 30) {
        // console.log(`${player2.name} has won!`);
        // winnerText.textContent = `${player2.name} has won!`
        player2.hasWon = true;
    }
    if (firstRow[2] + secRow[1] + thirdRow[0] === 3) {
        // console.log(`${player1.name} has won!`);
        // winnerText.textContent = `${player1.name} has won!`
        player1.hasWon = true;
    }
    if (firstRow[2] + secRow[1] + thirdRow[0] === 30) {
        // console.log(`${player2.name} has won!`);
        // winnerText.textContent = `${player2.name} has won!`
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
}



//provides attribute to button
const gamebutton = document.querySelector(".gamebtn")
gamebutton.setAttribute("inGame", false)
gamebutton.addEventListener("click", () => {
    //give the mark container text a random player number
    //checks if player names are inputted, if not game cannot start
    player1.name = playerOneInput.value;
    player2.name = playerTwoInput.value;
    if (player1.name !== "" && player2.name !== "") {
        resetButton();
        document.querySelector("#container").className = "container"
    } else {
        alert("Please fill out both player names before starting the game!")
    }
})

//starts or resets the game by changing the game status
function resetButton() {
    gamebutton.setAttribute("inGame", true)
    gamebutton.style.display = "none"
    const markers = document.querySelectorAll(".markers-hide");
    markers.forEach(marker => {
        marker.classList.remove("markers-hide");
        marker.classList.add("markers")
    })
    resetPlayers();
    clearField();
    playerTags();
    counter = 0;
    sidesPicked = 0;
    winnerText.textContent = ""
    winnerText.style.display = "none"
}

let containerText = document.getElementsByClassName("containerText")
for (let i = 0; i < containerText.length; i++) {
    containerText[i].textContent = `PLAYER ${Math.ceil(Math.random() * 456)}`
}
//checks to see if player has won, if not the result is a tie, when the game ends reset field value
function endOfGame(e) {

    if (player1.hasWon === true || player2.hasWon === true || counter === 9 && player1.hasWon === false && player2.hasWon === false) {
        //if game has ended and there is a winner show the winner text
        if (player1.hasWon === true || player2.hasWon === true) {
            winnerText.style.display = "block"
            if (e.target.innerHTML.split(" ").includes("left")) {
                console.log(`${containerText[0].textContent} HAS WON`)
                winnerText.textContent = `${containerText[0].textContent} HAS WON`
            }
            if (e.target.innerHTML.split(" ").includes("right")) {
                console.log(`${containerText[1].textContent} HAS WON`)
                winnerText.textContent = `${containerText[1].textContent} HAS WON`
            }
            //if the game is tied, show tied text
        } else {
            winnerText.style.display = "block";
            winnerText.textContent = `It is a tie!`;
        }
        gamebutton.textContent = "PLAY AGAIN";
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

//clears the board, sets box attributes to default, restarts the buttons
function clearField() {
    const fieldBoxes = document.querySelectorAll(".box")
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
}

//reset player settings to default
function resetPlayers() {
    player1.turn = true;
    player2.turn = false;
    player1.mark = '';
    player2.mark = '';
    player1.hasWon = false;
    player2.hasWon = false;
}

//sets the player names to form input text
function playerTags() {
    player1.name = playerOneInput.value
    player2.name = playerTwoInput.value
    playerOneInput.style.display = "none";
    playerTwoInput.style.display = "none";
    playerOneHead = document.querySelector(".player1");
    playerOneHead.textContent = player1.name.toUpperCase()
    playerTwoHead = document.querySelector(".player2");
    playerTwoHead.textContent = player2.name.toUpperCase()
    const logo = document.querySelector(".logos");
    logo.style.display = "none";
}


//sets gameState as false until Start button is pressed
function beforeGameField() {
    if (gameState !== "true") {
        container.className = "container-beforeGame"

    }
}
beforeGameField()