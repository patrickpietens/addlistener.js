# addlistener.js
Helper functions for adding and removing listeners to Node and NodeList objects.
Adds `on`, `off` and `once` methods to the `Node`, `NodeList` and `window` prototypes.

## Installation
```bash
$ npm install --save addlistener.js
```

## Example
```javascript
import 'addlistener.js';

// Adding a click listener to element myFoobar
let myElement = document.getElementById('#foobar');
const removeClickListener = myElement.on('click', (event) => { ... });

// The addListener returns a functions which remove the listener when invoked:
removeClickListener();

// Futhermore, you can use the on, off and once on element(s):
let myElements = document.querySelectorAll('.foobar');
myElements.once('click' (event) => { ... });

// And on the window object
window.on('resize', (event) => { ... });
```
