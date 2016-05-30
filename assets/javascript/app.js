//alert("See if you can guess the right answer!")

var incorrect=false;
var correct=true;
var wins= 0;
var losses= 0;
var total= 0;
var userGuess = '';
var timer;
//When document starts this function will happen
$(document).ready(function(){	



//restarts game
function restart(){
	var incorrect=false;
	var correct=true;
	var wins= 0;
	var losses= 0;
	var total= 0;
	var userGuess = '';
	var timer;

	//adds text to wins and losses
	$("#userGuess").text(total);
	$("#wins").text(wins);
	$("#losses").text(losses);
	

