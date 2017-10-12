function xhr(method, url) {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest({ mozSystem: true }); // Set Mozsystem to true in order not get error.        
        request.onload = () => resolve(request.responseText);
        request.onerror = () => reject(request.statusText);
        request.open(method, url, true);
        request.send();
    });
};

function getNRhymingWords(word, n) {
	return new Promise((resolve, reject) => {
        xhr('GET', 'https://api.datamuse.com/words?rel_rhy=' + word).then((responseText) =>  {
            // debugger;
            var rhymes = JSON.parse(responseText); // Receive JSON data
            var rhymingWords = [];
            for (var i = 0; i < n; i++) {
                var randomIndex = Math.floor(Math.random() * rhymes.length);
                rhymingWords.push(rhymes[randomIndex].word);
            }
            resolve(rhymingWords);
        })
	});
}

// var rhyme = prompt('Enter the word to rhyme with'); // FUTURE ALEXA UTTERANCE
// getNRhymingWords(rhyme, 5).then((data) => console.log("rhyming words API call result: " + data)) // changed this one to cool promise type









/*
var Alexa = require('alexa-sdk');
var Data = require("./data");

const skillName = "Rhyme Generator";

var handlers = {

    "GetRhyme": function () {
        var speechOutput = "Please say a word, and I will rhyme it.";
        AMAZON.LITERAL 
    },

    "AboutIntent": function () {
        var speechOutput = "If you say a word, I will do my best to give you a rhyme.";
        this.emit(':tellWithCard', speechOutput, skillName, speechOutput);
    },

    "AMAZON.HelpIntent": function () {
        var speechOutput = "";
        speechOutput += "Here are some things you can say: ";
        speechOutput += "What rhymes with Cat. ";
        speechOutput += "What rhymes with plate. ";
        speechOutput += "What rhymes with skate. ";
        speechOutput += "So how can I help?";
        this.emit(':ask', speechOutput, speechOutput);
    },

    "AMAZON.StopIntent": function () {
        var speechOutput = "Goodbye";
        this.emit(':tell', speechOutput);
    },

    "AMAZON.CancelIntent": function () {
        var speechOutput = "Goodbye";
        this.emit(':tell', speechOutput);
    },

    "LaunchRequest": function () {
        var speechText = "";
        speechText += "Welcome to " + skillName + ". ";
        speechText += "Tell me a word and I will rhyme it. ";
        var repromptText = "For instructions on what you can say, please say help me.";
        this.emit(':ask', speechText, repromptText);
    }

};

exports.handler = function (event, context) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = "amzn1.echo-sdk-ams.app.APP_ID";
    alexa.registerHandlers(handlers);
    alexa.execute();
};
*/
