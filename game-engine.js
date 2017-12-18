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

var swordOrNot = false;
var joinDarkOrNot = false;
var murderFatherOrNot = false;

// waiting for the dom to be loaded then running the init function
// $(init);
window.addEventListener('DOMContentLoaded', $(init));

function init() {
    createBoard();
    dropCharacter();
}

function createBoard() {
    // for every item inside the board, i want to create an li and append it to the ul inside the html
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            $(`<li class="${board[i][j]}"></li>`).appendTo($('.board'));
        }
    }
}

function dropCharacter() {
    $('li:nth-child(20)').addClass('luke'); // nth-child(n) n must be a number
}

// reference to get current Luke position
function currentLukeIndex() {
    // always use .luke as the position reference
    const currentLiIndex = $('li').index($('li.luke'));
    return currentLiIndex;
}

// defining function extracting the original li element's class
function extractOriginalLiClass() {
    const originalLiClass = $($('li')[currentLukeIndex()]).attr('class');

    // extract the real action without removing 'a' & 'luke'
    var txtArr = originalLiClass.split(' ');
    console.log(txtArr);

    var txtLength = txtArr.length;
    var extractTxt = [];

    for (var i = 0; i < txtLength; i++) {
        console.log(txtArr[i]);
        txtArr[i].split('');
        var itemLength = txtArr[i].length;
        console.log(itemLength);
        if (itemLength > 4) {
            extractTxt.push(txtArr[i])
        }

    }
    console.log(extractTxt);
    return extractTxt
}

// series plausible actions that Luke could take
function moveLeftNext() {
    const newLiLeft = $('li')[currentLukeIndex() - 1];
    // const newLiLeftClass = $($('li')[currentLukeIndex() - 1]).attr('class');
    // const originalLiClass = $($('li')[currentLukeIndex()]).attr('class');
    //
    // console.log(newLiLeftClass);
    // console.log(originalLiClass);

    var extractOriginalClass = extractOriginalLiClass();

    // use .luke as position reference and add real actions by overlapping onto top
    $('li.luke').removeClass('luke');
    $(newLiLeft).addClass('luke');

    // remove other residual effects from all previous possible actions
    for (var i = 0; i < extractOriginalClass.length; i++) {
        $('li').removeClass(extractOriginalClass[i]);
    }

    if (swordOrNot === false) {
        // adding real direction actions before sword by overlapping onto top of .luke
        $(newLiLeft).addClass('lukeLeft');
    } else {
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
        $('li').removeClass('lukeKill');

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
        $('li').removeClass('lukeKill');

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
        $('li').removeClass('lukeKill');

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

        // remove luke killing action
        $('li').removeClass('lukeKill');

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
        $('li').removeClass('lukeKill');
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
        $('li').removeClass('lukeKill');
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
        $('li').removeClass('lukeKill');
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
        const audioMarioWin = document.getElementById('audioM');
        audioMarioWin.src = 'audio/superMarioWin.mp3';
        audioMarioWin.play();
    }
    // console.log(swordOrNot);
    return swordOrNot;
}

function murderAttempt() {
    // const newLiRight = $('li')[currentLukeIndex() + 1];
    $('li').removeClass('lukeLeft lukeRight lukeUp lukeDown');
    $('li').removeClass('lukeLeftSword lukeRightSword lukeUpSword lukeDownSword');

    $('li.luke').addClass('lukeKill');
    // $('li.luke').removeClass('luke');
    if ($($('li')[currentLukeIndex() + 1]).attr('class') === 'g') {
        murderFatherOrNot = true;
    }
}

$(document).keydown(function(e){ // 'e' for event
    if((e.which === 38) // up arrow
        // the block next in the moving direction is nether wall nor box
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
        // the block next in the moving direction is nether wall nor box
        && ($($('li')[currentLukeIndex() - row0.length]).attr('class') !== 'w')
        && ($($('li')[currentLukeIndex() - row0.length]).attr('class') === 'b')
        // the block 2 next after can neither be wall, box, sword nor goal
        && ($($('li')[currentLukeIndex() - (row0.length * 2)]).attr('class') !== 'w')
        && ($($('li')[currentLukeIndex() - (row0.length * 2)]).attr('class') !== 'b')
        && ($($('li')[currentLukeIndex() - (row0.length * 2)]).attr('class') !== 's')
        && ($($('li')[currentLukeIndex() - (row0.length * 2)]).attr('class') !== 'g')) {
        pushUpNext();
        pickSword();
    } else if ((e.which === 40) // down arrow
        && ($($('li')[currentLukeIndex() + row0.length]).attr('class') !== 'w')
        && ($($('li')[currentLukeIndex() + row0.length]).attr('class') === 'b')
        && ($($('li')[currentLukeIndex() + (row0.length * 2)]).attr('class') !== 'w')
        && ($($('li')[currentLukeIndex() + (row0.length * 2)]).attr('class') !== 'b')
        && ($($('li')[currentLukeIndex() + (row0.length * 2)]).attr('class') !== 's')
        && ($($('li')[currentLukeIndex() + (row0.length * 2)]).attr('class') !== 'g')) {
        pushDownNext();
        pickSword();
    } else if ((e.which === 37) // left arrow
        && ($($('li')[currentLukeIndex() - 1]).attr('class') !== 'w')
        && ($($('li')[currentLukeIndex() - 1]).attr('class') === 'b')
        && ($($('li')[currentLukeIndex() - 2]).attr('class') !== 'w')
        && ($($('li')[currentLukeIndex() - 2]).attr('class') !== 'b')
        && ($($('li')[currentLukeIndex() - 2]).attr('class') !== 's')
        && ($($('li')[currentLukeIndex() - 2]).attr('class') !== 'g')) {
        pushLeftNext();
        pickSword();
    } else if ((e.which === 39) // right arrow
        && ($($('li')[currentLukeIndex() + 1]).attr('class') !== 'w')
        && ($($('li')[currentLukeIndex() + 1]).attr('class') === 'b')
        && ($($('li')[currentLukeIndex() + 2]).attr('class') !== 'w')
        && ($($('li')[currentLukeIndex() + 2]).attr('class') !== 'b')
        && ($($('li')[currentLukeIndex() + 2]).attr('class') !== 's')
        && ($($('li')[currentLukeIndex() + 2]).attr('class') !== 'g')) {
        pushRightNext();
        pickSword();
    } else if ((e.which === 69) // e key: execute
        && (swordOrNot === true)) {
        murderAttempt();
    }
    // console.log($($('li')[currentLukeIndex()]).attr('class'));
    // console.log(joinDarkCondition());
    // console.log(murderFatherCondition());
});


function joinDarkCondition() {
    if ((swordOrNot === true) &&
        (($($('li')[currentLukeIndex()]).attr('class') === 'g luke lukeLeftSword')
            || ($($('li')[currentLukeIndex()]).attr('class') === 'g luke lukeRightSword')
            || ($($('li')[currentLukeIndex()]).attr('class') === 'g luke lukeUpSword')
            || ($($('li')[currentLukeIndex()]).attr('class') === 'g luke lukeDownSword')) ) {
        joinDarkOrNot = true;
    }
    if (joinDarkOrNot === true) {
        setTimeout(function() {
            $('ul').fadeOut(2000, 'swing', removeUl());
        }, 1000);
    }
    return joinDarkOrNot;
}

function murderFatherCondition() {
    if (murderFatherOrNot === true) {
        setTimeout(function() {
            $('ul').fadeOut(2000, 'swing', removeUl());
        }, 3000);
    }
    return murderFatherOrNot;
}

function removeUl() {
    setTimeout(function() {
        $('ul').remove(); // remove the game board
        showAftermath(); // trigger the consequence page
    }, 3000);
}

function showAftermath() {
    if (murderFatherOrNot === true) {
        $('#aftermathM').fadeIn(2000, 'swing');
    } else if (joinDarkOrNot === true) {
        $('#aftermathJ').fadeIn(2000, 'swing');
    }
}

// var legalM = [];
// function canMove(){
//   for (var i = 0; i < board.length; i++) {
//     for (var j = 0; j < board[i].length; j++) {
//       if (board[i][j] !== 'w') {
//         legalM.push(board[i][j]);
//         console.log(i, j);
//       }
//     }
//   }
//   return legalM;
// }
// console.log(canMove());
