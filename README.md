# Pirate Speak 

A Node module for translating from english to pirate

![Painty The Pirate](http://img2.wikia.nocookie.net/__cb20121116031105/spongebob/images/thumb/e/eb/PaintythePirate.jpg/500px-PaintythePirate.jpg)

## Installation

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

```js
var pirateSpeak = require('pirate-speak');

var english = 'Mama always said life was like a box of chocolates. You never know what you\'re gonna get.';
var pirate = pirateSpeak.translate(english);
//  -> Mama always said life be like a barrel o' chocolates. Ye nary know what you're gonna get.
```


## License
>You can check out the full license [here](https://github.com/mikewesthad/pirate-speak/blob/master/LICENSE)

This project is licensed under the terms of the **MIT** license.
