$(document).ready(function() {

var goalNumber;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
var userScore = 0;
var wins = 0;
	$("#yourWins").html(wins);
var losses = 0;
	$("#yourLosses").html(losses);

// create random numbers and assign them to each crystal
function createCrystalValue() {
	crystalOne = Math.floor(Math.random() * 12) + 1;
	crystalTwo = Math.floor(Math.random() * 12) + 1;
	crystalThree = Math.floor(Math.random() * 12) + 1;
	crystalFour = Math.floor(Math.random() * 12) + 1;
};


// create random number for each round
function createGoal() {
	goalNumber = Math.floor(Math.random() * 101) + 19;
	$("#goal").html(goalNumber);
};


// when clicking each crystal, use the value, increase userScore and show in html
function assignCrystalValue() {

	$("#firstCrystal").on("click", function () {
		console.log(crystalOne);
		userScore = userScore + crystalOne;
		$("#yourScore").html(userScore);
	});

	$("#secondCrystal").on("click", function () {
		console.log(crystalTwo);
		userScore = userScore + crystalTwo;
		$("#yourScore").html(userScore);
	});

	$("#thirdCrystal").on("click", function () {
		console.log(crystalThree);
		userScore = userScore + crystalThree;
		$("#yourScore").html(userScore);
	});

	$("#fourthCrystal").on("click", function () {
		console.log(crystalFour);
		userScore = userScore + crystalFour;
		$("#yourScore").html(userScore);
	});

	$("#yourScore").html(userScore);
};


// compare scores 
function compareScores() {
	$(".crystal").on("click", function () {
		// if userScore == goalNumber, increase wins, create new goalNumber and crystal value. reset userScore
		if (userScore == goalNumber) {
			wins = wins + 1;
			$("#yourWins").html(wins);
			userScore = 0;
			$("#yourScore").html(userScore);
			createGoal();
			$("#goal").html(goalNumber);
			createCrystalValue();
			alert("You Won!   Wahoo!\n\nYou get a bone!");
		}

		// if userScore > goalNumber, losses increase, create new goalNumber and crystal value. reset userScore
		if (userScore > goalNumber) {
			losses = losses + 1;
			$("#yourLosses").html(losses);
			userScore = 0;
			$("#yourScore").html(userScore);
			createGoal();
			$("#goal").html(goalNumber);
			createCrystalValue();
			alert("Oh no! Too many biscuits! You lose!")
		}
	});

};

// execute each function

createGoal();

assignCrystalValue();
compareScores();
createCrystalValue();	



});