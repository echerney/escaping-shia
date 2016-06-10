$(document).ready(function(){
  console.log("connected")

  //there will be an array of questions and an array of answers, with matching indexes
var qArray = ['1', '2', '3', '4', '5', '6', '7']
var aArray = ['1', '2', '3', '4', '5', '6', '7']

  //the game start with the gif of the first part of the video, then alerts you that the game is starting


  //A math problem will show up in header 2. You can type in the answer and press enter to compare
function showQuestion() {
  var qNum = Math.floor(Math.random() * qArray.length);
  $('#question').text(qArray[qNum]);
}

  //if your answer matches the answer in the array, you move forward
  //if not, it sets the inbox blank and shows up a red x next to your answer (show)
  //checks for wins each time you progress.
function compareAnswer() {
  $('button').click(function(){
    if($('input').val() == $('#question').text()){
      movePlayer();
      showQuestion();
      $("input").val('')
    } else {
      console.log("wrong")
      $("#wrong").fadeIn(300).fadeOut(300);
      $("input").val('')
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
    $("#clapping").show();
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

}

function bearTrap() {
  var whereamI = parseInt($('.player').attr('id').replace('b',''));
  if (whereamI == 15) {
    var answer = prompt("But your leg! Ahh! It's caught in a bear trap! (What do you DO?)")
    if(answer == "gnaw off your leg") {
      var ans2 = prompt("1")
      if (ans2 == "1") {
        console.log('continue playing')
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
  $("#video").hide();
  $('#game').addClass('playing');
}, 18000);

setTimeout(function() {
  if ($('#game').hasClass('playing') == true) {
    window.setInterval(moveShia, 3500);
    showQuestion();
    compareAnswer();
  } else {
    console.log("uhoh");
  }
}, 19000);
});
