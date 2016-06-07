alert("You have 30 seconds after pushing start to finish!")


var incorrect = 0;
var correct = 0;
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
    $("#submit").click(function() {
      //submit button hides
      $('#submit').addClass('hide');
      //questions hide
      $('.questions').addClass('hide');
      //results show
      $('#results').removeClass('hide');
      //end time remaining
      clearInterval(intervalId); 


      //get the number of correct
      var numberCorrect = $('input[data-correct="correct"]:checked').length;
      var numberIncorrect = 6 - numberCorrect;

      //puts on the html what questions were correct vs incorrect
      $('#correct').html(numberCorrect);
      $("#incorrect").html(numberIncorrect);


      });

    });
  

function timer() {
  $('#results').removeClass('hide');
  $('.questions').addClass('hide');
};

function showTimeLeft() {
  timeRemaining--;
  $('#timer').html(timeRemaining);
    if (timeRemaining === 0){
      clearInterval(intervalId);
      //alerts game over only when the timer hits 0 while playing
      alert("Game Over");
      var numberCorrect = $('input[data-correct="correct"]:checked').length;
      var numberIncorrect = 6 - numberCorrect;

      //puts on the html what questions were correct vs incorrect
      $('#correct').html(numberCorrect);
      $("#incorrect").html(numberIncorrect);

    };
  };