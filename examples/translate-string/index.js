var fs = require("fs");
var pirateSpeak = require("../../lib/pirate-speak");

var english = "Mama always said life was like a box of chocolates. You never know what you're gonna get.";
var pirate = pirateSpeak.translate(english);

console.log("--------");
console.log(english);
console.log("\nPirate:")
console.log("-------");
console.log(pirate + "\n");