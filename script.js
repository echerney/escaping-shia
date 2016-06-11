$(document).ready(function(){
  console.log("connected")

  //there will be an array of questions and an array of answers, with matching indexes
var qArray = ['17 + 5', '3 * 5', '16 + 23', '54 / 6', '12 + 54',
'57 - 35', '22 - 8', '72 / 9', '5 * 5 * 3', '56 / 2',
'18 - 9', '26 - 14', '45 / 15', '26 / 2', '24 / 8',
'70 / 5', '58-15', '27-15', '6 * 2 * 2', '60 / 5',
'5 * 6', '5.5 * 4', '17 - 8', '3 * 13', '45 / 9']
var aArray = ['22', '15', '39', '9', '66',
'22', '14', '8', '75', '28',
'9', '12', '3', '13', '3',
'14', '43', '12', '24', '12',
'30', '22', '9', '39', '5']

  //the game start with the gif of the first part of the video, then alerts you that the game is starting


  //A math problem will show up in header 2. You can type in the answer and press enter to compare
function showQuestion() {
  qNum = Math.floor(Math.random() * qArray.length);
  $('#question').text(qArray[qNum]);
}

  //if your answer matches the answer in the array, you move forward
  //if not, it sets the inbox blank and shows up a red x next to your answer (show)
  //checks for wins each time you progress.
function compareAnswer() {
  $('input').on('keypress', function(e){
    var keycode = (e.keyCode);
    if(keycode == '13'){
      if($('input').val() == aArray[qNum]) {
        movePlayer();
        showQuestion();
        $("input").val('')
      } else {
        console.log("wrong")
        $("#wrong").fadeIn(300).fadeOut(300);
        $("input").val('')
      }
    }
    checkForWin();
  })
};

function movePlayer() {
  var prevPos = parseInt($('.player').attr('id').replace('b',''));
  var prevID = "#b" + prevPos
  var nextID = "#b" + (prevPos + 1);
  $(nextID).addClass('player');
  setTimeout($(prevID).removeClass('player'), 30);
  bearTrap();
}


function checkForWin() {
  var wheresShia = parseInt($('.shia').attr('id').replace('b',''));
  var whereamI = parseInt($('.player').attr('id').replace('b',''));
  if (whereamI == wheresShia) {
    endGame();
    shiaWins();
  } else if (whereamI == 16) {
    endGame();
    $('#clapping').fadeIn();
  } else if (whereamI - wheresShia <= 1) {
    $("#warning").fadeIn();
    $("#game").addClass("animated shake");
  } else {
    $("#warning").fadeOut();
    $("#game").removeClass("animated shake");
  };
};

function endGame() {
  $('.shia').removeClass('shia');
  $('.player').removeClass('player');
  $('#game').removeClass('playing');
  $('#video').remove();
};


function shiaWins() {
  alert("You have just been eaten by Shia Lebouf.")
}

function bearTrap() {
  var whereamI = parseInt($('.player').attr('id').replace('b',''));
  if (whereamI == 15) {
    var answer = prompt("But your leg! Ahh! It's caught in a bear trap! (What do you DO?)")
    if(answer == "gnaw off your leg") {
      var ans2 = prompt("Will you sucessfully gnaw your leg off?\nSolve for x: 7x + 13 = 55")
      if (ans2 == "6") {
        console.log('continue playing')
        $('.player').css('background-image', 'url("stumplegblue.jpg")');
        $('.player').css('opacity', '0.7')
      } else {
        endGame();
        shiaWins();
      }
    } else {
      endGame();
      shiaWins();
    }
  } else {
    console.log("going")
  }
};

// shia moves on a timer, fades in and out of each box.
// Also checks position to give warning or end game
  function moveShia() {
    var prevID = parseInt($('.shia').attr('id').replace('b',''));
    var prevShia = "#b" + prevID
    var nextID = "#b" + (prevID + 1);
    $(nextID).addClass('shia');
    setTimeout($(prevShia).removeClass('shia'), 30);
    checkForWin();
  };

setTimeout(function() {
  $("#video").fadeOut();
  $('#game').addClass('playing');
}, 18000);

$('input').click(function(){
  if ($('#game').hasClass('playing') == true) {
    window.setInterval(moveShia, 5500);
    showQuestion();
    compareAnswer();
  } else {
    console.log("uhoh");
  }
});

});
