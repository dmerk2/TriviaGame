//alert("You have 30 seconds after pushing start to finish!")

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
    //add the questions on the page
    $('.questions').removeClass('hide');
    //hides musicPic
    $('#musicPic').addClass('hide');

    // Start Timer
      setTimeout(timer, 30 * 1000);
      intervalId = setInterval(showTimeLeft, 1000);
  });
    //When you click submit...
    $("#submit").click(function(){
      //submit button hides
      $('#submit').addClass('hide');
      //questions hide
      $('.questions').addClass('hide');
      //results show
      $('#results').removeClass('hide');
      //end time remaining
      clearInterval(intervalId)      
      //TIMER IS STILL RUNNING AND NEEDS TO BE FIXED!!
      //Next step would be to have clearTimeout work here so we can stop the setTimeout
 
    });
    var questions = $('input');
    // this accounts for all radio buttons, so we'll loop over them with a 'FOR' loop
    for (var i = 0; i < questions.length; i++){
      // this checks to see if the radio button is checked or not.  If not, then this returns FALSE
      console.log($(questions[i]).is(':checked'));
    };
    
});
//After 30 seconds alert 'Game Over' 
function timer() {
  //alert('Game Over!');
  $('#results').removeClass('hide');
  $('.questions').addClass('hide');
};

function showTimeLeft() {
  timeRemaining--;
  $('#timer').html(timeRemaining)
    if (timeRemaining === 0){
      clearInterval(intervalId)
    };
}


