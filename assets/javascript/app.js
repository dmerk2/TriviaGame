//HOW DO I ALERT ONLY 1 PAGE??            
alert("You have 30 seconds after pushing start to finish!")

var incorrect = false;
var correct = true;
var pointsCorrect = [];
var pointIncorrect = [];
var userClick = '';
var questionNumber;
var timeRemaining = 30;
var intervalId;
//when the document loads this will happen
$(document).ready(function() {
	//when you click start..
  $('#start').click(function() {
  	//hides the start button
  	$('#start').addClass('hide');
    $('.questions').removeClass('hide');
    //hides musicPic
    $('#musicPic').addClass('hide');
    // Start Timer
      setTimeout(timer, 30 * 1000);
      intervalId = setInterval(showTimeLeft, 1000);
    });
});
//After 30 seconds alert 'Game Over' and Goes to action_page.html
function timer() {
  alert('Game Over!');
  //go to action_page.hml
  $('#results').removeClass('hide');
  $('.questions').addClass('hide');
  //setTimeout(window.location.assign('action_page.html', 30 * 1000));
};

function showTimeLeft() {
  timeRemaining--;
  $('#timer').html(timeRemaining)
    if (timeRemaining === 0){
      clearInterval(intervalId)
    };
}

// var questionNumber = $('input').attr('name');
// 	if (questionNumber ==='q1')
		

// if ('userClick' ...for question 1.... === 'c'){
// 	pointCorrect =+ 1
// } else {
// 	pointsIncorrect =+ 1
// } else if {
// 	unanswered =+ 1
// };
