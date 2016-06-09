$(document).ready(function(){
  console.log("connected")

var qArray = ['1', '2', '3', '4', '5', '6', '7']
var aArray = ['1', '2', '3', '4', '5', '6', '7']

  //there will be an array of questions and an array of answers, with matching indexes

  //the game start with the gif of the first part of the video, then alerts you that the game is starting

  //your id will show up at box 3 or so, with shia at box 1.

  // while class = playing... keep going with the game

  // make conditions for when the game will be over, and use those to turn off playing
  //A math problem will show up in header 2. You can type in the answer and press enter to compare
function showQuestion() {
  var qNum = Math.floor(Math.random() * qArray.length);
  $('#question').text(qArray[qNum]);
}

  //if your answer matches the answer in the array, you move forward
  //if not, it sets the inbox blank and shows up a red x next to your answer (show)
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
  var prevID = parseInt($('.player').attr('id').replace('b',''));
  var prevPlayer = "#b" + prevID
  var nextID = "#b" + (prevID + 1);
  $(nextID).addClass('player');
  setTimeout($(prevPlayer).removeClass('player'), 30);
}



function warnPlayer() {
  var wheresShia = parseInt($('.shia').attr('id').replace('b',''));
  var whereamI = parseInt($('.player').attr('id').replace('b',''));
  if (whereamI - wheresShia <= 2) {
    $("#warning").fadeIn()
  } else if (whereamI - wheresShia <= 0) {
    $('#gamewindow').removeClass('playing')
    shiaWins = true;
    alert("Looks like you've been eaten by Shia LeBouf.");
  }
};

function checkForWin() {
  var wheresShia = parseInt($('.shia').attr('id').replace('b',''));
  var whereamI = parseInt($('.player').attr('id').replace('b',''));
  if (whereamI - wheresShia <= 2) {
    $("#warning").fadeIn()
  } else if (whereamI - wheresShia <= 0) {
    $('#gamewindow').removeClass('playing')
    alert("Looks like you've been eaten by Shia LeBouf.");
  } else if (whereamI == 16) {
    alert("You've escaped Actual Cannibal Shia Lebouf!")
  } else {
    console.log('still going!');
  }
}


//   //shia moves on a timer, fades in and out of each box.
//   //check for dead every time shia moves.
//   //check for close each time shia moves (if yourspot-shiaspot < 2, unhide the text)
  function moveShia() {
    var prevID = parseInt($('.shia').attr('id').replace('b',''));
    var prevShia = "#b" + prevID
    var nextID = "#b" + (prevID + 1);
    $(nextID).addClass('shia');
    setTimeout($(prevShia).removeClass('shia'), 30);
    checkForWin();
  };


  window.setInterval(moveShia, 5000);
  showQuestion();
  compareAnswer();
});
