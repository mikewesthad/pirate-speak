var pirateSpeak = require("../lib/pirate-speak");
var fs = require("fs");

exports.testCase = function(test){
	test.expect(1);
	var english = "Females FEMALES females feMALES";
	var expectedPirate = "Wenches WENCHES wenches wenches";
	var pirate = pirateSpeak.translate(english);
	test.equal(pirate, expectedPirate);
	test.done();
};

exports.testSentence = function(test){
	test.expect(1);
	var english = "Hey there buddy, it's been a long time. How have you been?";
	var expectedPirate = "Ahoy there mate, 'tis been a long time. How have ye been?";
	var pirate = pirateSpeak.translate(english);
	test.equal(pirate, expectedPirate);
	test.done();
};

exports.testNonLetters = function(test){
	test.expect(3);

	var english = "Hey!!!!!I....HAVE????NO,,,,SPACES";
	var expectedPirate = "Ahoy!!!!!me....HAVE????NAY,,,,SPACES";
	var pirate = pirateSpeak.translate(english);
	test.equal(pirate, expectedPirate);

	var english = "He/<couldn't>*be*&the^%$#@!theif.`~[]{}:;";
	var expectedPirate = "He/<couldn't>*be*&thar^%$#@!swoggler.`~[]{}:;";
	var pirate = pirateSpeak.translate(english);
	test.equal(pirate, expectedPirate);

	var english = "I said: \"HAHA you can't\"";
	var expectedPirate = "me said: \"YO HO ye can't\"";
	var pirate = pirateSpeak.translate(english);
	test.equal(pirate, expectedPirate);

	test.done();
};


exports.testLyrics = function(test){
	test.expect(2);

	var english = fs.readFileSync(__dirname + "/lyrics-tests/swag-english.txt", "utf8");
	var expectedPirate = fs.readFileSync(__dirname + "/lyrics-tests/swag-pirate.txt", "utf8");
	var pirate = pirateSpeak.translate(english);
	test.equal(pirate, expectedPirate);

	var english = fs.readFileSync(__dirname + "/lyrics-tests/smooth-criminal-english.txt", "utf8");
	var expectedPirate = fs.readFileSync(__dirname + "/lyrics-tests/smooth-criminal-pirate.txt", "utf8");
	var pirate = pirateSpeak.translate(english);
	test.equal(pirate, expectedPirate);

	test.done();
};