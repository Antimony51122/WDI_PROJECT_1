// series of animation functions consecutively calling one another
function pLukeIn() {
    setTimeout(function() {
        $('#luke1stTime').css('display', 'inline-block');
        $('#luke1stTime').fadeIn(3000, 'swing', iAmIn());
    }, 1000);
}

function iAmIn() {
    setTimeout(function() {
        $('.i-am').fadeIn(1500, 'swing', yourIn());
    }, 1000);
}

function yourIn() {
    setTimeout(function() {
        $('.your').fadeIn(1500, 'swing', fatherIn());
    }, 1000);
}

function fatherIn() {
    setTimeout(function() {
        $('.father').fadeIn(1500, 'swing', inputIntroIn());
    }, 1000);
}

function inputIntroIn() {
    setTimeout(function() {
        $('.loadGame').fadeIn(1500, 'swing', darthVIn());
    }, 1000);
}

function darthVIn() {
    setTimeout(function() {
        $('.darthV').fadeIn('slow', 'swing');
        $('.darthV').animate(
            {'right': '0px',
                'top': '+= 100px',
                'bottom': '+= 100px',
                'max-height': '120%'}, 4000);
    }, 300);
}

$('#play').click(function() {
    pLukeIn();
});

// transfer to the game board
$('.loadGame').click(function() {
    // firstly stop the background music
    $('#luke1stTime').remove();
    $('.i-am').remove();
    $('.your').remove();
    $('.father').remove();
    $('.darthV').remove();
    $('.loadGame').remove();
    $('#audio').remove();
    // $('<ul class="board"></ul>').appendTo('body');
    gameBoardIn();
});

// display the game board
function gameBoardIn() {
    setTimeout(function() {
        $('.board').fadeIn(1500, 'swing');
    }, 300);
}

// pre-intro music controlling part
function init(){
    const playButton = document.getElementById('play');
    playButton.addEventListener('click', play);
}

function play(){
    const audioImperial = document.getElementById('audio');
    audioImperial.src = 'audio/imperialMarchShort.mp3';
    // complete version: 'audio/imperialMarch.mp3'
    // needs to change to url for wider usage
    audioImperial.playbackRate = 0.8; // play at slower speed
    audioImperial.volume = 0.7; // control the volume corresponding to later audios
    audioImperial.play();
    // using event listener to loop the bgm
    audioImperial.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);

    $('div').remove('#ready');
    $('div').remove('#dark');
    $('div').remove('#play');
}

window.addEventListener('DOMContentLoaded', init);
