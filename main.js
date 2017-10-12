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
