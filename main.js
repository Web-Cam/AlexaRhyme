var start = 'https://api.datamuse.com/words?rel_rhy=';
var rhyme = prompt("Enter the word to rhyme with");
var url = start + rhyme;


var ourRequest = new XMLHttpRequest({mozSystem: true});
ourRequest.open('GET', url)
ourRequest.onload = function() {
	var rhymes = JSON.parse(ourRequest.responseText);
	console.log(rhymes[2].word)
	rhymesreturn = rhymes[2].word
	alert(rhymesreturn)
};
ourRequest.send();