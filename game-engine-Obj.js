var maze = maze || {};

maze.row0 = [ 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'];
maze.row1 = [ 'w', 'a', 'a', 'w', 'a', 'a', 'a', 'a', 'a', 'w', 'a', 'a', 'a', 'a', 'a', 'a', 'w'];
maze.row2 = [ 'w', 'a', 'b', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'g', 'w'];
maze.row3 = [ 'w', 'a', 'a', 'a', 'a', 'a', 's', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'w'];
maze.row4 = [ 'w', 'a', 'a', 'w', 'a', 'a', 'a', 'a', 'a', 'w', 'a', 'a', 'a', 'a', 'a', 'a', 'w'];
maze.row5 = [ 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'];

maze.board = [maze.row0, maze.row1, maze.row2, maze.row3, maze.row4, maze.row5];

maze.swordOrNot = false;
maze.joinDarkOrNot = false;
maze.murderFatherOrNot = false;


maze.init = function init() {
  this.createBoard();
  this.dropCharacter();
  console.log(maze); // check who this is
};

maze.createBoard = function createBoard() {
  for (var i = 0; i < this.board.length; i++) {
    for (var j = 0; j < this.board[i].length; j++) {
      $(`<li class="${this.board[i][j]}"></li>`).appendTo($('.board'));
    }
  }
};

maze.dropCharacter = function dropCharacter() {
  $('li:nth-child(19)').addClass('luke');
};

maze.currentLukeIndex = $('li').index($('li.luke'));
maze.currentLukePosition = $($('li')[maze.currentLukeIndex]);

maze.moveLeftNext = function moveLeftNext() {
  this.newLiLeft = $('li')[this.currentLukeIndex - 1];
  if (this.swordOrNot === false) {
    $('li.luke').removeClass('luke');
    $(this.newLiLeft).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');

    $(this.newLiLeft).addClass('lukeLeft');
  } else {
    $('li.luke').removeClass('luke');
    $(this.newLiLeft).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');
    $('li').removeClass('lukeLeftSword lukeRightSword lukeUpSword lukeDownSword');
    $('li').removeClass('lukeKill');

    $(this.newLiLeft).addClass('lukeLeftSword');
  }
};

maze.moveRightNext = function moveRightNext() {
  this.newLiRight = $('li')[this.currentLukeIndex + 1];
  if (this.swordOrNot === false) {
    $('li.luke').removeClass('luke');
    $(this.newLiRight).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');

    $(this.newLiRight).addClass('lukeRight');
  } else {
    $('li.luke').removeClass('luke');
    $(this.newLiRight).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');
    $('li').removeClass('lukeLeftSword lukeRightSword lukeUpSword lukeDownSword');
    $('li').removeClass('lukeKill');

    $(this.newLiRight).addClass('lukeRightSword');
  }
};

maze.moveUpNext = function moveUpNext() {
  this.newLiUp = $('li')[this.currentLukeIndex - this.row0.length];
  if (this.swordOrNot === false) {
    $('li.luke').removeClass('luke');
    $(this.newLiUp).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');

    $(this.newLiUp).addClass('lukeUp');
  } else {
    $('li.luke').removeClass('luke');
    $(this.newLiUp).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');
    $('li').removeClass('lukeLeftSword lukeRightSword lukeUpSword lukeDownSword');
    $('li').removeClass('lukeKill');

    $(this.newLiUp).addClass('lukeUpSword');
  }
};

maze.moveDownNext = function moveDownNext() {
  this.newLiDown = $('li')[this.currentLukeIndex + this.row0.length];
  if (this.swordOrNot === false) {
    $('li.luke').removeClass('luke');
    $(this.newLiDown).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');

    $(this.newLiDown).addClass('lukeDown');
  } else {
    $('li.luke').removeClass('luke');
    $(this.newLiDown).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');
    $('li').removeClass('lukeLeftSword lukeRightSword lukeUpSword lukeDownSword');
    $('li').removeClass('lukeKill');

    $(this.newLiDown).addClass('lukeDownSword');
  }
};

maze.pushLeftNext = function pushLeftNext() {
  this.newLiLeft= $('li')[this.currentLukeIndex - 1];
  this.newLiLeftBefore = $('li')[this.currentLukeIndex - 2];
  if (this.swordOrNot === false) {
    $('li.luke').removeClass('luke');
    $(this.newLiLeft).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');
    $(this.newLiLeft).addClass('lukeLeft');

    $(this.newLiLeft).addClass('a').removeClass('b');
    $(this.newLiLeftBefore).addClass('b').removeClass('a');
  } else {
    $('li.luke').removeClass('luke');
    $(this.newLiLeft).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');
    $('li').removeClass('lukeLeftSword lukeRightSword lukeUpSword lukeDownSword');
    $('li').removeClass('lukeKill');
    $(this.newLiLeft).addClass('lukeLeftSword');

    $(this.newLiLeft).addClass('a').removeClass('b');
    $(this.newLiLeftBefore).addClass('b').removeClass('a');
  }
};

maze.pushRightNext = function pushRightNext() {
  this.newLiRight = $('li')[this.currentLukeIndex + 1];
  this.newLiRightAfter = $('li')[this.currentLukeIndex + 2];
  if (this.swordOrNot === false) {
    $('li.luke').removeClass('luke');
    $(this.newLiRight).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');
    $(this.newLiRight).addClass('lukeRight');

    $(this.newLiRight).addClass('a').removeClass('b');
    $(this.newLiRightAfter).addClass('b').removeClass('a');
  } else {
    $('li.luke').removeClass('luke');
    $(this.newLiRight).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');
    $('li').removeClass('lukeLeftSword lukeRightSword lukeUpSword lukeDownSword');
    $('li').removeClass('lukeKill');
    $(this.newLiRight).addClass('lukeRightSword');

    $(this.newLiRight).addClass('a').removeClass('b');
    $(this.newLiRightAfter).addClass('b').removeClass('a');
  }
};

maze.pushUpNext = function pushUpNext() {
  this.newLiUp = $('li')[this.currentLukeIndex - this.row0.length];
  this.newLiUpAbove = $('li')[this.currentLukeIndex - (this.row0.length * 2)];
  if (this.swordOrNot === false) {
    $('li.luke').removeClass('luke');
    $(this.newLiUp).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');
    $(this.newLiUp).addClass('lukeUp');

    $(this.newLiUp).addClass('a').removeClass('b');
    $(this.newLiUpAbove).addClass('b').removeClass('a');
  } else {
    $('li.luke').removeClass('luke');
    $(this.newLiUp).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');
    $('li').removeClass('lukeLeftSword lukeRightSword lukeUpSword lukeDownSword');
    $('li').removeClass('lukeKill');
    $(this.newLiUp).addClass('lukeUpSword');

    $(this.newLiUp).addClass('a').removeClass('b');
    $(this.newLiUpAbove).addClass('b').removeClass('a');
  }
};

maze.pushDownNext = function pushDownNext() {
  this.newLiDown = $('li')[this.currentLukeIndex + this.row0.length];
  this.newLiDownBelow = $('li')[this.currentLukeIndex + (this.row0.length * 2)];
  if (this.swordOrNot === false) {
    $('li.luke').removeClass('luke');
    $(this.newLiDown).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');
    $(this.newLiDown).addClass('lukeDown');

    $(this.newLiDown).addClass('a').removeClass('b');
    $(this.newLiDownBelow).addClass('b').removeClass('a');
  } else {
    $('li.luke').removeClass('luke');
    $(this.newLiDown).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');
    $('li').removeClass('lukeLeftSword lukeRightSword lukeUpSword lukeDownSword');
    $('li').removeClass('lukeKill');
    $(this.newLiDown).addClass('lukeDownSword');

    $(this.newLiDown).addClass('a').removeClass('b');
    $(this.newLiDownBelow).addClass('b').removeClass('a');
  }
};

maze.pickSword = function pickSword() {
  if ((this.currentLukePosition.attr('class') === 's luke lukeLeft')
  || (this.currentLukePosition.attr('class') === 's luke lukeRight')
  || (this.currentLukePosition.attr('class') === 's luke lukeUp')
  || (this.currentLukePosition.attr('class') === 's luke lukeDown')) {

    $('li.s').addClass('a');
    $('li.s').removeClass('s');
    this.swordOrNot = true;
    // here play mario win music
  }
  console.log(this.swordOrNot);
  return this.swordOrNot;
};

maze.murderDarthVador = function murderDarthVador() {
  $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');
  $('li').removeClass('lukeLeftSword lukeRightSword lukeUpSword lukeDownSword');

  $('li.luke').addClass('lukeKill');

  this.murderFatherOrNot = true;
};

// obj in obj
maze.keyMatch = {
  'up': 38,
  'down': 40,
  'left': 37,
  'right': 39,
  'e': 69
};
console.log(maze.keyMatch['up']);

$(document).keydown(function(e) {
  switch(e.which) {
    case this.keyMatch['up']:
      if ((this.newLiUp.attr('class') !== 'w')
      && (this.newLiUp.attr('class') !== 'b')) {
        this.moveUpNext();
        this.pickSword();
      } else if ((this.newLiUp.attr('class') !== 'w')
      && (this.newLiUp.attr('class') === 'b')
      && (this.newLiUpAbove.attr('class') !== 'w')
      && (this.newLiUpAbove.attr('class') !== 'b')
      && (this.newLiUpAbove.attr('class') !== 's')
      && (this.newLiUpAbove.attr('class') !== 'g')) {
        this.pushUpNext();
        this.pickSword();
      }
      break;
    case this.keyMatch['down']:
      if ((this.newLiDown.attr('class') !== 'w')
      && (this.newLiDown.attr('class') !== 'b')) {
        this.moveDownNext();
        this.pickSword();
      } else if ((this.newLiDown.attr('class') !== 'w')
      && (this.newLiDown.attr('class') === 'b')
      && (this.newLiDownBelow.attr('class') !== 'w')
      && (this.newLiDownBelow.attr('class') !== 'b')
      && (this.newLiDownBelow.attr('class') !== 's')
      && (this.newLiDownBelow.attr('class') !== 'g')) {
        this.pushDownNext();
        this.pickSword();
      }
      break;
    case this.keyMatch['left']:
      if ((this.newLiLeft.attr('class') !== 'w')
      && (this.newLiLeft.attr('class') !== 'b')) {
        this.moveLeftNext();
        this.pickSword();
      } else if ((this.newLiLeft.attr('class') !== 'w')
      && (this.newLiLeft.attr('class') === 'b')
      && (this.newLiLeftBefore.attr('class') !== 'w')
      && (this.newLiLeftBefore.attr('class') !== 'b')
      && (this.newLiLeftBefore.attr('class') !== 's')
      && (this.newLiLeftBefore.attr('class') !== 'g'))  {
        this.pushLeftNext();
        this.pickSword();
      }
      break;
    case this.keyMatch['right']:
      if ((this.newLiRight.attr('class') !== 'w')
      && (this.newLiRight.attr('class') !== 'b')) {
        this.moveRightNext();
        this.pickSword();
      } else if ((this.newLiRight.attr('class') !== 'w')
      && (this.newLiRight.attr('class') === 'b')
      && (this.newLiRightAfter.attr('class') !== 'w')
      && (this.newLiRightAfter.attr('class') !== 'b')
      && (this.newLiRightAfter.attr('class') !== 's')
      && (this.newLiRightAfter.attr('class') !== 'g')) {
        this.pushRightNext();
        this.pickSword();
      }
      break;
    case maze.keyMatch['e']:
      if ((this.swordOrNot) && (this.newLiRight.attr('class') === 'g')) {
        this.murderDarthVador();
      }
      break;
    default:
  }
  this.joinDarkCondition();
// });

maze.joinDarkCondition = function joinDarkCondition() {
  if ((this.swordOrNot === true) &&
  ((this.currentLukePosition.attr('class') === 'g luke lukeLeftSword')
  || (this.currentLukePosition.attr('class') === 'g luke lukeRightSword')
  || (this.currentLukePosition.attr('class') === 'g luke lukeUpSword')
  || (this.currentLukePosition.attr('class') === 'g luke lukeDownSword')) ) {
    this.joinDarkOrNot = true;
  }
  if (this.joinDarkOrNot === true) {
    setTimeout(function() {
      $('ul').fadeOut(5000, 'swing', this.removeUl());
    }, 1000);
  }
  return this.joinDarkOrNot;
};

maze.murderFatherCondition = function murderFatherCondition() {
  if (this.murderFatherOrNot === true) {
    setTimeout(function() {
      $('ul').fadeOut(5000, 'swing', this.removeUl());
    }, 4000);
  }
  return this.murderFatherOrNot;
};

maze.removeUl = function removeUl() {
  setTimeout(function() {
    $('ul').remove();
    this.showAftermath();
  }, 5000);
};

maze.showAftermath = function showAftermath() {
  if (this.murderFatherOrNot === true) {
    $('#aftermathM').fadeIn('slow', 'swing');
  } else if (this.joinDarkOrNot === true) {
    $('#aftermathJ').fadeIn('slow', 'swing');
  }
};

$(maze.init.bind(maze));
