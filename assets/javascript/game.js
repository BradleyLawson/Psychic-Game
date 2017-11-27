//*****Global Variables********
//varibale that stores the running tally of user's wins
var wins = 0;
//variable that stores the running tally of user's losses
var losses = 0;

var guessesLeft = 10;

//max guesses allowable in game
var totalGuesses = 10;
// the onely available characters that are allowed. Just the alphabet
var availCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var letterToGuess = null;

var guessedLetters =[];

//++++++++++++++++Functions

//letter to guess function
var updateletterToGuess = function(){
    this.letterToGuess = this.availCharacters[Math.floor(Math.random() * this.availCharacters.length)];
};

//variable that stores the running tally of guesses user has left
var updateGuessesLeft = function () {
	document.querySelector("#GuessesLeft").innerHTML = guessesLeft;
	};

var updateAlreadyGuessed = function(){
    document.querySelector("#Guesses").innerHTML = guessedLetters.join(', ');
};

var updateWins = function(){
	document.querySelector("#wins").innerHTML = wins;
}

var updateLosses = function(){
	document.querySelector("#losses").innerHTML = losses;
}

// game reset function
var reset = function(){
	totalGuesses = 10;
	guessesLeft = 10;
	guessedLetters = [];

	updateGuessesLeft();
	updateletterToGuess();
	updateAlreadyGuessed();
}

var resetWinsLosses = function(){
	wins = 0;
	losses = 0;

	totalGuesses = 10;
	guessesLeft = 10;
	guessedLetters = [];

	updateWins();
	updateLosses();
	updateGuessesLeft();
	updateletterToGuess();
	updateAlreadyGuessed();

}

updateGuessesLeft();
updateAlreadyGuessed();

//main body of game
document.onkeyup = function(event){
	var userGuess = event.key.toLowerCase();

	if (availCharacters.indexOf(userGuess) === -1){
		alert("Please choose a letter!");
	}
	else if (guessedLetters.includes(userGuess)){
		alert("You have already guessed that letter");
	}
	else{
		guessedLetters.push(userGuess);
		guessesLeft--;
	}

	updateGuessesLeft();
	updateAlreadyGuessed();

		if (guessesLeft > 0){
        	if (userGuess === letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = wins;
                reset();
                if (wins > 10){
                	alert("Congratulations!");
                	resetWinsLosses();
                }
        	}
        } 
     	else if (guessesLeft == 0){
            losses++;
            document.querySelector('#losses').innerHTML = losses;
            reset();
            if (losses > 10){
            	alert("Try Again!");
            	resetWinsLosses();
            }
        }
	
	
	};

