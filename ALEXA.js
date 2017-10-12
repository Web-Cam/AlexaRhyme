var http = require('http')
var Alexa = require('alexa-sdk');
var start = 'https://api.datamuse.com/words?rel_rhy=';
const skillName = "Rhyme Generator";

var handlers = {

    "GetRhyme": function () {
		var rhyme = this.event.request.intent.slots.words;
		var url = start + rhyme;
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
this.emit(:tell,`your word' ${word}`,'rhymes with',rhymingWords);
//var rhyme = this.event.request.intent.slots.words.value; // FUTURE ALEXA UTTERANCE
//console.log('rhyming words API call result:', getNRhymingWords(rhyme, 5));
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
