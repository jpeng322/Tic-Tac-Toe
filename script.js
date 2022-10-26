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
const playingField = [[0, 0, 0],
[0, 0, 0],
[0, 0, 0]];
// playingField[1][1] = 1
// console.log(playingField)
//vertical win: 0 = 3 = 6 or 1 = 4 = 7 or 2 = 5 = 8 
//horizontal win: 0 = 1 = 2 or 3 = 4 = 5 or 6 = 7 = 8
//diagnal win: if 0 = 4 = 8 or 2 = 4 = 6
// [01, 02, 03 ]
// []
//

// function getAttr() {
//     takenArray = document.getElementsByClassName('box')
//     boxTaken = takenArray.map(box => box.getAttribute('taken'))
// }

// console.log(getAttr())
// console.log(takenArray)
// giveListenerToBox = document.getElementsByClassName('box 1')
// console.log(document.getElementsByClassName('box 1'))
// giveListenerToBox.addEventListener('click', playRound())

// console.log(document.querySelector('.box.1'))
class Player {
    constructor(name, mark) {
        this.name = name;
        this.mark = mark
        this.turn = false
    }

    updateField(e) {
        // console.log(playingField)
        // console.log(e.target.value)
        // console.log(typeof (e.target.value))
        if (e.target.value === "0") {
            if (counter % 2 === 0) {
                playingField[0][0] = 1
            } else {
                playingField[0][0] = 2
            }
        }
        if (e.target.value === "1") {
            if (counter % 2 === 0) {
                playingField[0][1] = 1
            } else {
                playingField[0][1] = 2
            }
        }
        if (e.target.value === "2") {
            if (counter % 2 === 0) {
                playingField[0][2] = 1
            } else {
                playingField[0][2] = 2
            }
        }
        if (e.target.value === "3") {
            if (counter % 2 === 0) {
                playingField[1][0] = 1
            } else {
                playingField[1][0] = 2
            }
        }
        if (e.target.value === "4") {
            if (counter % 2 === 0) {
                playingField[1][1] = 1
            } else {
                playingField[1][1] = 2
            }
        }
        if (e.target.value === "5") {
            if (counter % 2 === 0) {
                playingField[1][2] = 1
            } else {
                playingField[1][2] = 2
            }
        }
        if (e.target.value === "6") {
            if (counter % 2 === 0) {
                playingField[2][0] = 1
            } else {
                playingField[2][0] = 2
            }
        }
        if (e.target.value === "7") {
            if (counter % 2 === 0) {
                playingField[2][1] = 1
            } else {
                playingField[2][1] = 2
            }
        }
        if (e.target.value === "8") {
            if (counter % 2 === 0) {
                playingField[2][2] = 1
            } else {
                playingField[2][2] = 2
            }
        }
    }
    // whosTurn(e) {
    //     if (counter < 17 && e.target.textContent === '1') {
    //         if (this.turn) {
    //             counter += 1
    //             e.target.textContent = this.mark;
    //             this.turn = !this.turn
    //             // console.log(`${this.name} just went, ${counter}`)
    //             // console.log(counter)
    //         } else {
    //             this.turn = true
    //         }
    //     }
    // }

    // whosTurn(e) {
    //     if (counter < 17 && e.target.textContent === '1') {
    //         if (this.turn) {
    //             counter += 1
    //             e.target.textContent = this.mark;
    //             this.turn = !this.turn
    //             // console.log(`${this.name} just went, ${counter}`)
    //             // console.log(counter)
    //         } else {
    //             this.turn = true
    //         }
    //     } else {
    //         this.turn = !this.turn
    //     }
    // }
    whosTurn(e) {
        counter += 1;
        e.target.textContent = this.mark;

    }


    // console.log(e.target)
    // const boxToRemove = document.getElementsByClassName(`box ${e.target.value}`)
    // console.log(boxToRemove)
    // console.log(getEventListeners(boxToRemove))
    // boxToRemove.removeEventListener('click', this.whosTurn(), updateField())
    // console.log(e)

    // removeListener(e) {
    //     if (e.target.textContent !== '') {
    //         console.log('sadasd')
    //         e.target.removeEventListener(
    //             'click', this.whosTurn(), this.updateField()
    //         )
    //     }
    // }

    //     marker() {
    //         const allBox = document.getElementsByClassName("box")
    //         // counter = false
    //         console.log(`${this.name}, ${this.turn}, ${counter}`)
    //         for (let i = 0; i < allBox.length; i++) {
    //             allBox[i].addEventListener("click", e => { this.whosTurn(e), this.updateField(e), console.log(`${this.name}, ${this.turn}, ${counter}`) })
    //         }
    //     }
    // }

    //     marker() {
    //         const allBox = document.getElementsByClassName("box")
    //         for (let i = 0; i < allBox.length; i++) {
    //             allBox[i].addEventListener("click", e => {
    //                 if (counter < 17 && e.target.textContent === '1') {
    //                     if (this.turn) {
    //                         this.whosTurn(e);
    //                         this.updateField(e);
    //                         this.turn = !this.turn
    //                         console.log(`${this.name}, ${this.turn}, ${counter}`)
    //                     }
    //                     if (this.turn === false) {
    //                         this.turn = !this.turn
    //                         console.log(`${this.name}, ${this.turn}, ${counter}`)
    //                     }
    //                 }
    //             })
    //         }
    //     }
    // }
    marker() {
        const allBox = document.getElementsByClassName("box")
        for (let i = 0; i < allBox.length; i++) {
            // let takenAttr = document.getElementsByClassName(`box ${[i]}`)[0].getAttribute("taken")
            allBox[i].addEventListener("click", e => {
                // console.log(document.getElementsByClassName(`box ${[i]}`)[0].getAttribute("taken"))
                if (this.turn) {
                    // console.log(e.target.textContent)
                    if (e.target.textContent === '1') {
                        this.whosTurn(e);
                        this.updateField(e);
                        this.turn = !this.turn;
                        console.log(`${this.name}, ${this.turn}, ${counter}`)
                    } else {
                        // console.log('return')
                        return
                    }
                } else {
                    // console.log(takenAttr)
                    if (document.getElementsByClassName(`box ${[i]}`)[0].getAttribute("taken") === 'false') {
                        this.turn = !this.turn;
                        document.getElementsByClassName(`box ${[i]}`)[0].setAttribute("taken", true)
                    } else {
                        this.turn = this.turn
                    }
                    console.log(`${this.name}, ${this.turn}, ${counter}`)
                }
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
            box.textContent = '1'
            box.setAttribute('taken', false)
            // box.addEventListener('click', (e) => { return e.target.textContent = 'haha' })
            // box.textContent = `${i}`;
            container.appendChild(box);

        }
    }
}

// console.log(counter)
const field = new theField
field.createField()
const player1 = new Player('Jacky', 'JACKY')
const player2 = new Player('Mei', 'Mei')
player1.turn = true
player1.marker()
player2.marker()


function playRound() {
    if (counter % 2 === 0) {
        player1.marker();
    } else {
        player2.marker()
    }
}


// playGame()