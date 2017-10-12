var xhr = function xhrWrapper() {
    var request = new XMLHttpRequest({ mozSystem: true }); // Set Mozsystem to true in order not get error.
    return function(method, url, callback) {
        request.onreadystatechange = function() {
            if (request.readyState === 4) {
                callback(request.responseText);
            }
        };
        request.open(method, url, true);
        request.send();
    };
}();

function getNRhymingWords(word, n) {
	xhr('GET', 'https://api.datamuse.com/words?rel_rhy=' + word, function(responseText) {
		debugger;
		var rhymes = JSON.parse(responseText); // Receive JSON data
		var rhymingWords = [];
		for (var i = 0; i < n; i++) {
			var randomIndex = Math.floor(Math.random() * rhymes.length);
			rhymingWords.push(rhymes[randomIndex].word);
		}
		return rhymingWords;
	});
}

var rhyme = prompt('Enter the word to rhyme with'); // FUTURE ALEXA UTTERANCE
console.log('rhyming words API call result:', getNRhymingWords(rhyme, 5));
