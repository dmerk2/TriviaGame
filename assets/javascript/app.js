//HOW DO I ALERT ONLY 1 PAGE??            
//alert("See if you can guess the right answer!")

var incorrect = false;
var correct = true;
var pointsCorrect = [];
var pointIncorrect = [];
var userClick = '';
var questionNumber;
var timer;


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
    setTimeout(timer, 3 * 1000);
    });
});
//After 30 seconds alert 'Game Over' and Goes to action_page.html
function timer() {
  alert('Game Over!');
  setTimeout(window.location.assign('action_page.html', 15 * 1000));
  //go to action_page.hml

};


// var questionNumber = $('input').attr('name');
// 	if (questionNumber ==='q1')
		

// if ('userClick' ...for question 1.... === 'c'){
// 	pointCorrect =+ 1
// } else {
// 	pointsIncorrect =+ 1
// } else if {
// 	unanswered =+ 1
// };
