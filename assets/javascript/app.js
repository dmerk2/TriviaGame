


//HOW DO I ALERT ONLY 1 PAGE??



//alert("See if you can guess the right answer!")

var incorrect = false;
var correct = true;
var unanswered = [];
var pointsCorrect = [];
var pointIncorrect = [];
var userClick = '';
var questionNumber;

//when the document loads this will happen
$(document).ready(function() {
	//when you click start..
  $('#start').click(function() {
  	//hides the start button
  	$('#start').addClass('hide');
    $('.questions').removeClass('hide');
    //hides musicPic
    $('#musicPic').addClass('hide');
  });
});

//NEEDS TO START WHEN START BUTTON IS CLICKED!!
function f(){
  alert('I NEED TO END THE GAME NOW!!!')
}
setTimeout(f, 30 * 1000)

// var questionNumber = $('input').attr('name');
// 	if (questionNumber ==='q1')
		

// // if ('userClick' ...for question 1.... === 'c'){
// // 	pointCorrect =+ 1
// // } else {
// // 	pointsIncorrect =+ 1
// // } else if {
// // 	unanswered =+ 1
// // };
