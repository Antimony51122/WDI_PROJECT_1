// spray mario over top

var row0 = [ 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'];
var row1 = [ 'a', 'a', 'w', 'a', 'a', 'a', 'a', 'a', 'w', 'a', 'a'];
var row2 = [ 'a', 'b', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'g'];
var row3 = [ 'a', 'a', 'a', 'a', 'a', 's', 'a', 'a', 'a', 'a', 'a'];
var row4 = [ 'a', 'a', 'w', 'a', 'a', 'a', 'a', 'a', 'w', 'a', 'a'];
var row5 = [ 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'];

var array = [row0, row1, row2, row3, row4, row5];

// waiting for the dom to be loaded then running the init function
$(init);

var swordOrNot = false;
var winOrNot = false;

function init() {
  createBoard();
  dropCharacter();
}

function createBoard() {
  // for every item inside the array, i want to create an li and append it to the ul inside the html
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      $(`<li class="${array[i][j]}"></li>`).appendTo($('.board'));
    }
  }
}

function dropCharacter() {
  $('li:nth-child(12)').addClass('luke'); // nth-child(n) n must be a number
  // $('li:nth-child(12)').addClass('lukeRight');
}

function currentLukeIndex() {
  // always use .luke as the position reference
  const currentLiIndex = $('li').index($('li.luke'));
  return currentLiIndex;
}

function moveLeftNext() {
  const newLiLeft= $('li')[currentLukeIndex() - 1];
  if (swordOrNot === false) {
    // use .luke as position reference and add real actions by overlapping onto top
    $('li.luke').removeClass('luke');
    $(newLiLeft).addClass('luke');

    // remove other residual effects from all previous possible actions
    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');

    // adding real direction actions before sword by overlapping onto top of .luke
    $(newLiLeft).addClass('lukeLeft');
  } else {
    // use .luke as position reference and add real actions by overlapping onto top
    $('li.luke').removeClass('luke');
    $(newLiLeft).addClass('luke');

    // remove other residual effects from all previous possible actions without Sword
    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');

    // remove other residual effects from all previous possible actions with Sword
    $('li').removeClass('lukeLeftSword lukeRightSword lukeUpSword lukeDownSword');

    // adding real direction actions after sword by overlapping onto top of .luke
    $(newLiLeft).addClass('lukeLeftSword');
  }
}

function moveRightNext() {
  const newLiRight = $('li')[currentLukeIndex() + 1];
  if (swordOrNot === false) {
    $('li.luke').removeClass('luke');
    $(newLiRight).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');

    $(newLiRight).addClass('lukeRight');
  } else {
    $('li.luke').removeClass('luke');
    $(newLiRight).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');
    $('li').removeClass('lukeLeftSword lukeRightSword lukeUpSword lukeDownSword');

    $(newLiRight).addClass('lukeRightSword');
  }
}

function moveUpNext() {
  const newLiUp= $('li')[currentLukeIndex() - row0.length];
  if (swordOrNot === false) {
    $('li.luke').removeClass('luke');
    $(newLiUp).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');

    $(newLiUp).addClass('lukeUp');
  } else {
    $('li.luke').removeClass('luke');
    $(newLiUp).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');
    $('li').removeClass('lukeLeftSword lukeRightSword lukeUpSword lukeDownSword');

    $(newLiUp).addClass('lukeUpSword');
  }
}

function moveDownNext() {
  const newLiDown = $('li')[currentLukeIndex() + row0.length];
  if (swordOrNot === false) {
    $('li.luke').removeClass('luke');
    $(newLiDown).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');

    $(newLiDown).addClass('lukeDown');
  } else {
    $('li.luke').removeClass('luke');
    $(newLiDown).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');
    $('li').removeClass('lukeLeftSword lukeRightSword lukeUpSword lukeDownSword');

    $(newLiDown).addClass('lukeDownSword');
  }
}

function pushLeftNext() {
  const newLiLeft= $('li')[currentLukeIndex() - 1];
  const newLiLeftBefore = $('li')[currentLukeIndex() - 2];
  if (swordOrNot === false) {
    // use .luke as position reference and add real actions by overlapping onto top
    $('li.luke').removeClass('luke');
    $(newLiLeft).addClass('luke');

    // remove other residual effects from all previous possible actions
    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');

    // adding real direction actions before sword by overlapping onto top of .luke
    $(newLiLeft).addClass('lukeLeft');

    // adding available floor & removing box on left corresponding position
    $(newLiLeft).addClass('a').removeClass('b');

    // adding box & removing available floor on left next after corresponding position
    $(newLiLeftBefore).addClass('b').removeClass('a');
  } else {
    // use .luke as position reference and add real actions by overlapping onto top
    $('li.luke').removeClass('luke');
    $(newLiLeft).addClass('luke');

    // remove other residual effects from all previous possible actions without Sword
    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');

    // remove other residual effects from all previous possible actions with Sword
    $('li').removeClass('lukeLeftSword lukeRightSword lukeUpSword lukeDownSword');

    // adding real direction actions after sword by overlapping onto top of .luke
    $(newLiLeft).addClass('lukeLeftSword');

    // adding available floor & removing box on left corresponding position
    $(newLiLeft).addClass('a').removeClass('b');

    // adding box & removing available floor on left next after corresponding position
    $(newLiLeftBefore).addClass('b').removeClass('a');
  }
}

function pushRightNext() {
  const newLiRight = $('li')[currentLukeIndex() + 1];
  const newLiRightAfter = $('li')[currentLukeIndex() + 2];
  if (swordOrNot === false) {
    $('li.luke').removeClass('luke');
    $(newLiRight).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');

    $(newLiRight).addClass('lukeRight');

    $(newLiRight).addClass('a').removeClass('b');

    $(newLiRightAfter).addClass('b').removeClass('a');
  } else {
    $('li.luke').removeClass('luke');
    $(newLiRight).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');
    $('li').removeClass('lukeLeftSword lukeRightSword lukeUpSword lukeDownSword');

    $(newLiRight).addClass('lukeRightSword');

    $(newLiRight).addClass('a').removeClass('b');

    $(newLiRightAfter).addClass('b').removeClass('a');
  }
}

function pushUpNext() {
  const newLiUp = $('li')[currentLukeIndex() - row0.length];
  const newLiUpAbove = $('li')[currentLukeIndex() - (row0.length * 2)];
  if (swordOrNot === false) {
    $('li.luke').removeClass('luke');
    $(newLiUp).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');

    $(newLiUp).addClass('lukeUp');

    $(newLiUp).addClass('a').removeClass('b');

    $(newLiUpAbove).addClass('b').removeClass('a');
  } else {
    $('li.luke').removeClass('luke');
    $(newLiUp).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');
    $('li').removeClass('lukeLeftSword lukeRightSword lukeUpSword lukeDownSword');

    $(newLiUp).addClass('lukeUpSword');

    $(newLiUp).addClass('a').removeClass('b');

    $(newLiUpAbove).addClass('b').removeClass('a');
  }
}

function pushDownNext() {
  const newLiDown = $('li')[currentLukeIndex() + row0.length];
  const newLiDownBelow = $('li')[currentLukeIndex() + (row0.length * 2)];
  if (swordOrNot === false) {
    $('li.luke').removeClass('luke');
    $(newLiDown).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');

    $(newLiDown).addClass('lukeDown');

    $(newLiDown).addClass('a').removeClass('b');

    $(newLiDownBelow).addClass('b').removeClass('a');
  } else {
    $('li.luke').removeClass('luke');
    $(newLiDown).addClass('luke');

    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');
    $('li').removeClass('lukeLeftSword lukeRightSword lukeUpSword lukeDownSword');

    $(newLiDown).addClass('lukeDownSword');

    $(newLiDown).addClass('a').removeClass('b');

    $(newLiDownBelow).addClass('b').removeClass('a');
  }
}

function pickSword() {
  if (($($('li')[currentLukeIndex()]).attr('class') === 's luke lukeLeft')
  || ($($('li')[currentLukeIndex()]).attr('class') === 's luke lukeRight')
  || ($($('li')[currentLukeIndex()]).attr('class') === 's luke lukeUp')
  || ($($('li')[currentLukeIndex()]).attr('class') === 's luke lukeDown')) {
    // $('li.s').addClass('taken')
    $('li.s').addClass('a');
    $('li.s').removeClass('s');
    swordOrNot = true;
    // here play mario win music
  }
  console.log(swordOrNot);
  return swordOrNot;
}

$(document).keydown(function(e){
  if((e.which === 38) // up arrow
  && ($($('li')[currentLukeIndex() - row0.length]).attr('class') !== 'w')
  && ($($('li')[currentLukeIndex() - row0.length]).attr('class') !== 'b')) {
    moveUpNext();
    pickSword();
  } else if((e.which === 40) // down arrow
  && ($($('li')[currentLukeIndex() + row0.length]).attr('class') !== 'w')
  && ($($('li')[currentLukeIndex() + row0.length]).attr('class') !== 'b')) {
    moveDownNext();
    pickSword();
  } else if((e.which === 37) // left arrow
  && ($($('li')[currentLukeIndex() - 1]).attr('class') !== 'w')
  && ($($('li')[currentLukeIndex() - 1]).attr('class') !== 'b')) {
    moveLeftNext();
    pickSword();
  } else if((e.which === 39) // right arrow
  && ($($('li')[currentLukeIndex() + 1]).attr('class') !== 'w')
  && ($($('li')[currentLukeIndex() + 1]).attr('class') !== 'b')) {
    moveRightNext();
    pickSword();
  } else if ((e.which === 38) // down arrow
  && ($($('li')[currentLukeIndex() - row0.length]).attr('class') !== 'w')
  && ($($('li')[currentLukeIndex() - row0.length]).attr('class') === 'b')
  && ($($('li')[currentLukeIndex() - (row0.length * 2)]).attr('class') !== 'w')
  && ($($('li')[currentLukeIndex() - (row0.length * 2)]).attr('class') !== 'b')) {
    pushUpNext();
    pickSword();
  } else if ((e.which === 40) // down arrow
  && ($($('li')[currentLukeIndex() + row0.length]).attr('class') !== 'w')
  && ($($('li')[currentLukeIndex() + row0.length]).attr('class') === 'b')
  && ($($('li')[currentLukeIndex() + (row0.length * 2)]).attr('class') !== 'w')
  && ($($('li')[currentLukeIndex() + (row0.length * 2)]).attr('class') !== 'b')) {
    pushDownNext();
    pickSword();
  } else if ((e.which === 37) // left arrow
  && ($($('li')[currentLukeIndex() - 1]).attr('class') !== 'w')
  && ($($('li')[currentLukeIndex() - 1]).attr('class') === 'b')
  && ($($('li')[currentLukeIndex() - 2]).attr('class') !== 'w')
  && ($($('li')[currentLukeIndex() - 2]).attr('class') !== 'b')) {
    pushLeftNext();
    pickSword();
  } else if ((e.which === 39) // right arrow
  && ($($('li')[currentLukeIndex() + 1]).attr('class') !== 'w')
  && ($($('li')[currentLukeIndex() + 1]).attr('class') === 'b')
  && ($($('li')[currentLukeIndex() + 2]).attr('class') !== 'w')
  && ($($('li')[currentLukeIndex() + 2]).attr('class') !== 'b')) {
    pushRightNext();
    pickSword();
  }
  console.log($($('li')[currentLukeIndex()]).attr('class'));
  console.log(winCondition());
});

// function alertWin() {
//   if (winCondition() === true) {
//     alert('win');
//   }
// }
// alertWin();

// $(document).keyup(function(){
//   // change back to ordinary picture.
//   $('li.luke').removeClass('luke');
//   $(currentLukeIndex()).addClass('luke');
// });

function winCondition() {
  if ((swordOrNot === true) &&
  (($($('li')[currentLukeIndex()]).attr('class') === 'g luke lukeLeftSword')
  || ($($('li')[currentLukeIndex()]).attr('class') === 'g luke lukeRightSword')
  || ($($('li')[currentLukeIndex()]).attr('class') === 'g luke lukeUpSword')
  || ($($('li')[currentLukeIndex()]).attr('class') === 'g luke lukeDownSword')) ) {
    winOrNot = true;
  }
  return winOrNot;
}



// var legalM = [];
// function canMove(){
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < array[i].length; j++) {
//       if (array[i][j] !== 'w') {
//         legalM.push(array[i][j]);
//         console.log(i, j);
//       }
//     }
//   }
//   return legalM;
// }
// console.log(canMove());
