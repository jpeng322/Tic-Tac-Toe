//Game title: Tic-Tac-Toe

 /*General Overview of Gameplay 
Describe the sequence of events that happen in your game
include how the score is used 
include how the game will end - including win/lose message 


*/
person vs person
first to three in a row wins, if not game is tied 
whoever goes first is randomized
when the first player clicks on the box their marker will fill the box 
then a function will alternate the turns so that the next move / marker will be from the opposing player
game ends when all the spots are filled, or if 3 in a row has been done, end message will be "nameOfPlayer1 has won"



/*Requirements - include a short note about how your game will fulfill each of these requirements 

user interaction causes changes to the web page using DOM methods (at least 3 changes during game play) can be images, text, score indicator 
  -different markers for each player
  -display who won/ tie message
  -node elements will change on clicks

correct use of at least 1 JavaScript Class that is used in the game 
  -class will be player and theField

use of a method defined in your class 
  -changeTurns() to see who is going or marker() that puts down mark

keep score - user must be able to gain points
  - the score will be to see who gets 3 first

declare if the user won or lost at the end of the game and display on the page 
  - if turns = 9 or if all spaces are taken then the game ends

 Use of CSS to set colors, fonts and overall layout of the page
  - center the board, adjust margins, use css as markers

use of iteration. examples: for loop, while loop, .forEach method, .map method
  - loop through playingField to see if there is 3 connected
  
*/



/* Plan functions 
start thinking about your basic functions! give them a name and list what they do 
marker() - marks the target
createField() - makes 9 divs or the playing area
whosTurn() - switch the turns
checkField() - loop through fieldArray to see if someone has won