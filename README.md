# Pirate Speak 

A Node module for translating from english to pirate

![Painty The Pirate](http://img2.wikia.nocookie.net/__cb20121116031105/spongebob/images/thumb/e/eb/PaintythePirate.jpg/500px-PaintythePirate.jpg)

## Install

```
$ npm install --save pirate-speak
```

## Usage 

```js
var pirateSpeak = require('pirate-speak');

var english = 'Cash rules everything around me C.R.E.A.M. get the money';
var pirate = pirateSpeak.translate(english);
//  -> Coin rules everything around me C.R.E.A.M. get thar doubloons
```

