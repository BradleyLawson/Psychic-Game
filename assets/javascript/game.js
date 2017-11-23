var wins = 0;
var losses = 0;
var maxGuesses = 10;
var availCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"];
var letter = availCharacters[Math.floor(Math.random() * availCharacters.length)];
var guesses = [];


document.onkeyup = function(event){
	var userGuess = event.key;


	if (userGuess !== letter) {
		maxGuesses--;
        document.querySelector("#guesses").innerHTML = userGuess;

		//alert(userGuess);
		// guess gets pushed into guesses[] array
	}
	else {
        document.querySelector("#wins").innerHTML = ++wins;

		//alert("wins: " + ++wins);
	}

}