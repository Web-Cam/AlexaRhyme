var http = require('http')
var Alexa = require('alexa-sdk');
var start = 'https://api.datamuse.com/words?rel_rhy=';
var rhymeGen = require(./main)
const skillName = "Rhyme Generator";

var handlers = {

    "GetRhyme": function () {
    rhymeGen()
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
