module.exports = require("./lib/pirate-speak");


var tests = [
	"Females FEMALES",
	"Semi-circle",
	"I said: \"HAHA\"",
	"Hey!!!!!I!!!!HAVE!!!!NO!!!!SPACES",
	"Hey there buddy, it's been a long time. How have you been?",
	"He, couldn't, be, stopped.",
	"I\nam\nnot\ngoing\nhome",
	"Party girls don't get hurt\nCan't feel anything, when will I learn\nI push it down, push it down.",
	"I'm the one \"for a good time call\"",
	"Swag, swag, swag, on you\nChillin' by the fire while we eatin' fondue\nI don't know about me but I know about you\nSo say hello to falsetto in three, two, swag"
];

for (var i = 0; i < tests.length; i++) {
	console.log(module.exports.translate(tests[i]));
};

fs = require("fs");

var s = fs.readFileSync("test/lyrics-tests/smooth-criminal-english.txt", "utf-8")
var t = module.exports.translate(s)
fs.writeFileSync("test/lyrics-tests/smooth-criminal-pirate.txt", t, "utf8");