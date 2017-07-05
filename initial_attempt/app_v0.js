var canvas = $('#GameBoardCanvas');
//The game board 1 = walls, 0 = free space, and -1 = the goal
var board = [
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [ 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [ 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [ 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [ 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [ 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [ 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [ 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
    [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var playerLegal = {
  x: 0,
  y: 0
};

//Draw the game board
function draw(){
  var width = canvas.width();
  var blockSize = width/board.length;
  var game = canvas[0].getContext('2d');
  console.log(game);
  game.setTransform(1, 0, 0, 1, 0, 0);
  game.clearRect(0, 0, width, width); // clear path: very important
  game.fillStyle='white';

  //Loop through the board array drawing the walls
  for(var y = 0; y < board.length; y++){
    for(var x = 0; x < board[y].length; x++){
      if(board[y][x] === 1){
        game.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
      }
    }
  }

  //Draw the player in blue circle to indicate position
  game.beginPath();
  var half = blockSize/2;
  game.fillStyle = 'blue';
  game.arc(playerLegal.x*blockSize+half, playerLegal.y*blockSize+half, half, 0, 2*Math.PI);
  // game.fill();
}

//Check to see if the new space is inside the board and not a wall
function canMove(x, y){
  return (y >= 0) && (y < board.length) && (x >= 0) && (x < board[y].length) && (board[y][x] !== 1);
}

$(document).keydown(function(e){
  if((e.which === 38) && canMove(playerLegal.x, playerLegal.y-1)) { //Up arrow
    playerLegal.y--;
    $('img').animate({top: '-=40px'}, 'fast');
  } else if((e.which === 40) && canMove(playerLegal.x, playerLegal.y+1)) { // down arrow
    playerLegal.y++;
    $('img').animate({top: '+=40px'}, 'fast');
  } else if((e.which === 37) && canMove(playerLegal.x-1, playerLegal.y)) {
    playerLegal.x--;
    $('img').animate({left: '-=40px'}, 'fast');
  } else if((e.which === 39) && canMove(playerLegal.x+1, playerLegal.y)) {
    playerLegal.x++;
    $('img').animate({left: '+=40px'}, 'fast');
  }
  e.preventDefault();
});


// var winCondition = funciton() {
//   for(var y = 0; y < board.length; y++){
//     for(var x = 0; x < board[y].length; x++){
//       //Draw a wall
//       if(board[y][x] === -1 && /* equals playerLegal position */ ){
//         // playerLegal won .....
//       }
//     }
//   }
// };

draw();
