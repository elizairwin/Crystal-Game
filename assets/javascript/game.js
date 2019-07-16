//defining my global variables
var score = 0;
var wins = 0;
var losses = 0;
var targetNumber;
var valueOne;
var valueTwo;
var valueThree;
var valueFour;
//starting my game
$(document).ready(function() {
	function startGame() {
		//displaying initial score, wins, and losses
		$("#score").text(score);
		$("#wins").text(wins);
		$("#losses").text(losses);
		creatingTargetNumber();
		settingValues();
	}
	//getting my magic number and putting it up on the scoreboard for the player
	function creatingTargetNumber() {
		targetNumber = Math.floor(Math.random() * 102 + 19);
		$("#target").html(targetNumber);
	}
	//creating values randomnly for each crystal
	function settingValues() {
		//assigning each crystal a random value
		$("#pinkCrystal").prop("value", Math.floor(Math.random() * 12 + 1));
		valueOne = $("#pinkCrystal").val();
		console.log(valueOne);
		$("#tealCrystal").prop("value", Math.floor(Math.random() * 12 + 1));
		valueTwo = $("#tealCrystal").val();
		console.log(valueTwo);
		$("#yellowCrystal").prop("value", Math.floor(Math.random() * 12 + 1));
		valueThree = $("#yellowCrystal").val();
		console.log(valueThree);
		$("#purpleCrystal").prop("value", Math.floor(Math.random() * 12 + 1));
		valueFour = $("#purpleCrystal").val();
		console.log(valueFour);
	}
	//whenever a cystal is clicked the score is updated and checked to determine if user has won or lost
	function clickListener() {
		$("#pinkCrystal").on("click", function() {
			score = score + valueOne;
			$("#score").html(score);
			scoreCheck();
		});
		$("#tealCrystal").on("click", function() {
			score = score + valueTwo;
			$("#score").html(score);
			scoreCheck();
		});
		$("#yellowCrystal").on("click", function() {
			score = score + valueThree;
			$("#score").html(score);
			scoreCheck();
		});
		$("#purpleCrystal").on("click", function() {
			score = score + valueFour;
			$("#score").html(score);
			scoreCheck();
		});
	}
	//checking the score whenever a crystal is clicked, determine win or loss
	function scoreCheck() {
		if (score === targetNumber) {
			wins++;
			$("#wins").text(wins);
            reset();
            alert("You won!")
		} else if (score >= targetNumber) {
			losses++;
			$("#losses").text(losses);
            reset();
            alert("You lost!")
		}
		//reseting the game
		function reset() {
			creatingTargetNumber();
			settingValues();
			score = 0;
			$("#score").html(score);
		}
	}

	function init() {
		startGame();
		clickListener();
	}
	init();
});