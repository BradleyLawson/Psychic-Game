var wins = 0;
var losses = 0;
var maxGuesses = 10;
var totalGuesses = 10;
// the onely available characters that are allowed. Just the alphabet
var availCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var letter = availCharacters[Math.floor(Math.random() * availCharacters.length)];
//Empty Array to store the userGuesses
var guesses = [];

document.onkeyup = function(event){
	var userGuess = event.key.toLowerCase();

		if (wins < 5 && losses < 5){

			if (availCharacters.includes(userGuess)){
			guesses.push(userGuess);
			}
			else{
			alert("Please Choose a Letter!")
			}

			if (guesses.length < totalGuesses){

				if (userGuess !== letter) {
				document.querySelector("#GuessesLeft").innerHTML = --maxGuesses;
        		document.querySelector("#Guesses").innerHTML = guesses;	
				}
				else {
        		document.querySelector("#wins").innerHTML = ++wins;
        		document.querySelector("#GuessesLeft").innerHTML = 10;
        		document.querySelector("#Guesses").innerHTML = guesses;
        		maxGuesses = 10;
        		guesses = [];
				}
			}
			else {
			document.querySelector("#losses").innerHTML= ++losses;
			document.querySelector("#GuessesLeft").innerHTML = 10;
        	document.querySelector("#Guesses").innerHTML = guesses;
			maxGuesses = 10;
        	guesses = [];
			}
		}
		else {
		maxGuesses = 10;
        guesses = [];
		document.querySelector("#losses").innerHTML= losses;
		document.querySelector("#GuessesLeft").innerHTML = 10;
        document.querySelector("#Guesses").innerHTML = guesses;
		}
	

};
