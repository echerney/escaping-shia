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
    alert("Looks like you've been eaten by Shia LeBouf.");
    endGame();
  } else if (whereamI == 16) {
    alert("You've escaped Actual Cannibal Shia Lebouf!")
    endGame();
  } else if (whereamI - wheresShia <= 1) {
    $("#warning").fadeIn();
    $("#maze").addClass("animated shake");
  } else {
    $("#warning").fadeOut();
    $("#maze").removeClass("animated shake");
  };
};

function endGame() {
  $('.shia').removeClass('shia');
  $('.player').removeClass('player');
  $('#game').removeClass('playing');
  //show the end video?
};

function bearTrap() {
  var whereamI = parseInt($('.player').attr('id').replace('b',''));
  if (whereamI == 14) {
    var answer = prompt("Oh no! You're caught!")
  } else {
    console.log("going")
  }
}

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

if ($('#game').hasClass('playing')== true) {
  window.setInterval(moveShia, 5000);
  showQuestion();
  compareAnswer();
} else {
  console.log("done");

}

});
