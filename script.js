$(document).ready(function(){
  console.log("connected")



  //there will be an array of questions and an array of answers, with matching indexes

  //the game start with the gif of the first part of the video, then alerts you that the game is starting

  //your id will show up at box 3 or so, with shia at box 1.

  //A math problem will show up in header 2. You can type in the answer and press enter to compare

  //if your answer matches the answer in the array, you move forward

  //if not, it sets the inbox blank and shows up a red x next to your answer (show)

  //shia moves on a timer, fades in and out of each box.
  //(while game is playing, move shia +1 in table.)
  //check for dead every time shia moves.
  //check for close each time shia moves (if yourspot-shiaspot < 2, unhide the text)
  function moveShia() {
    var prevID = parseInt($('.shia').attr('id').replace('b',''));
    var prevShia = "#b" + prevID
    var nextID = "#b" + (prevID + 1);
    $(nextID).addClass('shia');
    setTimeout($(prevShia).removeClass('shia'), 30);
  };


window.setInterval(moveShia, 5000);


});
