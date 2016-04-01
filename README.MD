# addlistener.js
Helper functions for adding and removing listeners to Node and NodeList objects.
Adds `on`, `off` and `once` methods to the `Node`, `NodeList` and `window` prototypes.

## Example
```javascript
import addListener from 'addlistener.js';

// Adding a click listener to element myFoobar
let myElement = document.getElementById('#foobar');
const removeClickListener = addListener(myElement, 'click', (event) => { ... });

// The addListener returns a functions which remove the listener when invoked:
removeClickListener();

// Futhermore, you can use the on, off and once on element(s):
let myElements = document.querySelectorAll('.foobar');
myElements.once('click' (event) => { ... });

// And on the window object
window.on('resize', (event) => { ... });
```

## Installation
```bash
$ npm install listener.js --save
```

## License
The MIT License (MIT)

Copyright (c) 2016 Patrick Pietens

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
