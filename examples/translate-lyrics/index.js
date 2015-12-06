var fs = require("fs");
var pirateSpeak = require("../../lib/pirate-speak");

var lyrics = fs.readFileSync("fetty-wap-trap-queen-lyrics.txt", "utf8");
var pirateLyrics = pirateSpeak.translate(lyrics);

console.log("\nFetty Wap's \"Trap Queen\"");
console.log("------------------------");
console.log(lyrics);
console.log("\nFetty Wap's \"PIRATE Trap Queen\"")
console.log("-------------------------------");
console.log(pirateLyrics + "\n");