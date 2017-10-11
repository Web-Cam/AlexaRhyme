var start = 'https://api.datamuse.com/words?rel_rhy=';
var rhyme = prompt('Enter the word to rhyme with'); // FUTURE ALEXA UTTERANCE
var url = start + rhyme; // Set url to input will change later to set to an alexa utterance.

// Code to check api against server
var ourRequest = new XMLHttpRequest({ mozSystem: true }); // Set Mozsystem to true in order not get error.
ourRequest.open('GET', url);
ourRequest.onload = function() {
	var rhymes = JSON.parse(ourRequest.responseText); // Receive JSON data
	var randomIndex = Math.floor(Math.random() * rhymes.length);
	console.log(rhymes[randomIndex].word); // Pick random rhyme from JSON
	result = rhymes[randomIndex].word;
	alert(result); // Popup will change to an alexa return statement.
};
ourRequest.send();
