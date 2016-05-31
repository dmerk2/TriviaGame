alert("See if you can guess the right answer!")

var incorrect = false;
var correct = true;
var unanswered = 0;
var pointsCorrect = 0;
var pointIncorrect = 0;


$(document).ready(function() {
  $('#start').click(function() {
  	$('#start').addClass('hide');
    $('.questions').removeClass('hide');
    $('#musicPic').addClass('hide');
  });
});
