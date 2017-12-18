# Star War Maze Game

By utilising HTML5, CSS3 and jQuery I designed and built a stylised, collision-based JavaScript game named "". This is a maze game based on star war plot of the story between Luke and his father Darth Vadar.

### Win Logic

The win logic consists of two stages of objectives:

- Finding the light saber
- Choose between:
	- join the dark side
	- eliminate the dark side by killing Darth Vadar

Basically, this has been achieved by defining 3 variables originally:

```js
var swordOrNot = false;
var joinDarkOrNot = false;
var murderFatherOrNot = false;
```
Either second or third can only be achieved on the premise that the first one has been achieved.


### Game Layout

The maze has been defined by arrays of strings:

- w for wall,
- a for available,
- g for goal

```js
// Build up game maze, w for wall, a for available, g for goal
var row0 = [ 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'];
var row1 = [ 'w', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'w'];
var row2 = [ 'w', 'a', 'w', 'a', 'w', 'a', 'w', 'a', 'b', 'b', 'b', 'a', 'a', 'w', 'w', 'w', 'a', 'w'];
var row3 = [ 'w', 'a', 'w', 'a', 'w', 'a', 'w', 'a', 'b', 'a', 'a', 'b', 'a', 'a', 'w', 'a', 'a', 'w'];
var row4 = [ 'w', 'a', 'w', 'a', 'w', 'a', 'w', 'a', 'b', 'a', 'a', 'b', 'a', 'a', 'w', 'a', 'a', 'w'];
var row5 = [ 'w', 'a', 'w', 'a', 'w', 'a', 'w', 'a', 'b', 'a', 'a', 'b', 'a', 'a', 'w', 'a', 'a', 'w'];
var row6 = [ 'w', 'a', 'w', 'a', 'w', 'a', 'w', 'a', 'b', 'a', 's', 'b', 'a', 'a', 'w', 'a', 'a', 'w'];
var row7 = [ 'w', 'a', 'a', 'w', 'a', 'w', 'a', 'a', 'b', 'b', 'b', 'a', 'a', 'w', 'w', 'w', 'a', 'w'];
var row8 = [ 'w', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'g', 'w'];
var row9 = [ 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'];

var board = [row0, row1, row2, row3, row4, row5, row6, row7, row8, row9];
```
Then, the maze array has appended to the HTML by render each single string of `'w'`, `'s'` and `'g'` as an `<li>` element:

```js
function createBoard() {
    // for every item inside the board, create an <li> and append it to the ul inside the html
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            $(`<li class="${board[i][j]}"></li>`).appendTo($('.board'));
        }
    }
}
```
Place the character of Luke onto the board:

```js
function dropCharacter() {
    $('li:nth-child(20)').addClass('luke'); // nth-child(n) n must be a number
}
```
The game has been initialised with the two functions above:

```js
// waiting for the dom to be loaded then running the init function
window.addEventListener('DOMContentLoaded', $(init));

function init() {
    createBoard();
    dropCharacter();
}
```
> The initialise block has to be placed above the two functions creating the board.



