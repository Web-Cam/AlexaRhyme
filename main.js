var start = 'https://api.datamuse.com/words?rel_rhy=';
var rhyme = prompt("Enter the word to rhyme with");// FUTURE ALEXA UTTERANCE
var url = start + rhyme; // Set url to input will change later to set to an alexa utterance.

// Code to check api against server
var ourRequest = new XMLHttpRequest({mozSystem: true});//had to set Mozsystem to true in order not get error.
ourRequest.open('GET', url)
ourRequest.onload = function() {
	var rhymes = JSON.parse(ourRequest.responseText); //Recieve the JSON data
	console.log(rhymes[2].word) //Select second rhyme from set. Need to fix to get a random rhyme.
	rhymesreturn = rhymes[2].word //Change variable to return to make future proram easier to understand
	alert(rhymesreturn) //Popup will change to an alexa return statement.
};
ourRequest.send();
