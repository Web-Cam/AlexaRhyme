function xhr(method, url) {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest({ mozSystem: true }); // Set Mozsystem to true in order not get error.        
        request.onload = () => resolve(request.responseText);
        request.onerror = () => reject(request.statusText);
        request.open(method, url, true);
        request.send();
    });
};

export function getNRhymingWords(word, n) {
    return new Promise((resolve, reject) => {
        xhr('GET', 'https://api.datamuse.com/words?rel_rhy=' + word).then((responseText) => {
            // debugger;
            var rhymes = JSON.parse(responseText); // Receive JSON data
            var rhymingWords = [];
            if (rhymes.length > 0) {
                for (var i = 0; i < n; i++) {
                    var randomIndex = Math.floor(Math.random() * rhymes.length);
                    rhymingWords.push(rhymes[randomIndex].word);
                }
            }
            resolve(rhymingWords);
        })
    });
}
