//*****Global Variables********
//varibale that stores the running tally of user's wins
var wins = 0;
//variable that stores the running tally of user's losses
var losses = 0;
//variable that stores the running tally of guesses user has left
var guessesLeft = 10;
//max guesses allowable in game
var totalGuesses = 10;
// the onely available characters that are allowed. Just the alphabet
var availCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var letter = availCharacters[Math.floor(Math.random() * availCharacters.length)];


for(var i=0; i < availCharacters.length; i++){
letter [i]


//Empty Array to store the userGuesses
var alreadyGuessed = [];

//captures the users keystrokes and stores in variable userGuess
//It is a function that runs the game
document.onkeyup = function(event){
	var userGuess = event.key.toLowerCase();

	//conditional that checks if the keystroke is included in the availCharacter array
	//if it is then it pushes it into the empty guesses array
	//if it is not then the game alerts to choose a letter
	if (availCharacters.includes(userGuess) && alreadyGuessed.indexOf(userGuess) == -1 ){
	alreadyGuessed.push(userGuess);
	}
	else{
	console.log("Please Choose a Letter!");
	}
	
		//conditional that sets the parameters of maximum # of wins and losses in a game (both < 5)
		if (wins < 5 && losses < 5){

			//conditional that checks if the number of userGuesses stored in guesses array is less than max guesses allowed
			if (alreadyGuessed.length < totalGuesses){
 				// checks if userGuess is or is not = to letter
				// if != then reduces # of guesses left by 1 and displays the letters guessed 
				if (userGuess !== letter) {
				document.querySelector("#GuessesLeft").innerHTML = --guessesLeft;
        		document.querySelector("#Guesses").innerHTML = alreadyGuessed;	
				}
				// if = then increases wins by 1, resets and displays guessesLeft to 10 and resets the display and guesses array to empty
				else {
        		document.querySelector("#wins").innerHTML = ++wins;
        		document.querySelector("#GuessesLeft").innerHTML = 10;
        		document.querySelector("#Guesses").innerHTML = alreadyGuessed;
        		guessesLeft = 10;
        		alreadyGuessed = [];
				}
			}
			//if the number of guesses is more than max guesses allowed then increases and displays losses by 1, resets the guesses left to 10
			// and updates the guesses array and display of the array
			else {
			document.querySelector("#losses").innerHTML= ++losses;
			document.querySelector("#GuessesLeft").innerHTML = 10;
        	document.querySelector("#Guesses").innerHTML = alreadyGuessed;
			guessesLeft = 10;
        	alreadyguessed = [];
			}
		}
		//if wins >= 5 or if losses >= 5
		else {	
		wins = 0;
		losses = 0;
		guessesLeft = 10;
        alreadyGuessed = [];
		document.querySelector("#losses").innerHTML= losses;
		document.querySelector("#GuessesLeft").innerHTML = 10;
        document.querySelector("#Guesses").innerHTML = alreadyGuessed;
		}	
};
}
