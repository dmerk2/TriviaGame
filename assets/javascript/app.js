//alert("See if you can guess the right answer!")

var incorrect = false;
var correct = true;
var unanswered = 0;
var userGuess = '';
var booleanValue = '';

$(document).ready(function() {
  $('#start').click(function() {
  	$('#start').addClass('hide');
    $('.questions').removeClass('hide');
    $('#musicPic').addClass('hide');
  });
});