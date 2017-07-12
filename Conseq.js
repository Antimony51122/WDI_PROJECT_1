// consequence murdering darth vador
function pLukeMIn() {
  setTimeout(function() {
    $('.lukeM').css('display', 'inline-block');
    $('.lukeM').fadeIn(3000, 'swing', youMurderIn());
  }, 1000);
}

function youMurderIn() {
  setTimeout(function() {
    $('#you-murder').fadeIn(1500, 'swing', yourFatherIn());
  }, 1000);
}

function yourFatherIn() {
  setTimeout(function() {
    $('#your-father').fadeIn(1500, 'swing', darthVDeathIn());
  }, 1000);
}

function darthVDeathIn() {
  setTimeout(function() {
    $('.darthVDeath').fadeIn(1500, 'swing', inputConseqOverIn());
  }, 1000);
}

function inputConseqOverIn() {
  setTimeout(function() {
    $('.game-over').fadeIn(1500, 'swing');
  }, 1000);
}

function playTragicMusic() {
  const audioZigen = document.getElementById('audio2');
  audioZigen.src = 'audio/ZigeunerweisenShort.mp3';
  // needs to change to url for wider usage
  setTimeout(function() {
    audioZigen.play();
    // using event listener to loop the bgm
    audioZigen.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);
  }, 3500);
}

$('#aftermathM').click(function() {
  $('#aftermathM').remove();
  pLukeMIn();
  playTragicMusic();
});


// consequence joining the dark side
function pLukeJIn() {
  setTimeout(function() {
    $('.lukeJ').css('display', 'inline-block');
    $('.lukeJ').fadeIn(3000, 'swing', yourFather1In());
  }, 0);
}

function yourFather1In() {
  setTimeout(function() {
    $('#your-father1').fadeIn(1500, 'swing', isActuallyIn());
  }, 500);
}

function isActuallyIn() {
  setTimeout(function() {
    $('#is-actually').fadeIn(1500, 'swing', darthTrumpIn());
  }, 500);
}

function darthTrumpIn() {
  setTimeout(function() {
    $('.darthTrump').fadeIn(5, 'swing', taxiVadorIn());
  }, 1000);
}

function taxiVadorIn() {
  setTimeout(function() {
    $('.taxiVador').fadeIn(1500, 'swing', surpriseIn());
  }, 3500);
}

function surpriseIn() {
  setTimeout(function() {
    $('.surprise').fadeIn(1500, 'swing', surpriseIn());
  },1000);
}

function playMarioDieMusic() {
  const audioMarioDie = document.getElementById('audio3');
  audioMarioDie.src = 'audio/marioDie.mp3';
  // needs to change to url for wider usage
  setTimeout(function() {
    audioMarioDie.play();
    // using event listener to loop the bgm
    audioMarioDie.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);
  }, 4500);
}

$('#aftermathJ').click(function() {
  $('#aftermathJ').remove();
  pLukeJIn();
  playMarioDieMusic();
});
