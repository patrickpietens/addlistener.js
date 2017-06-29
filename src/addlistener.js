'use strict';

function addEventListener(eventName, handler, useCapture = false) {
    Array.from(this).forEach((element) => {
        element.addEventListener(eventName, handler, useCapture);
    });
}

function removeEventListener(eventName, handler, useCapture = false) {
    Array.from(this).forEach((element) => {
        element.removeEventListener(eventName, handler, useCapture);
    });
}

function on(eventName, handler, useCapture = false) {
    this.addEventListener(eventName, handler, useCapture);
    return () => this.off(eventName, handler, useCapture);
}

function off(eventName, handler) {
    this.removeEventListener(eventName, handler);
}

function once(eventName, handler, useCapture = false) {
    const localHandler = (event) => {
        this.off(eventName, localHandler, useCapture);
        handler(event);
    };

    this.on(eventName, localHandler, useCapture);
}

NodeList.prototype.addEventListener = NodeList.prototype.addEventListener || addEventListener;
NodeList.prototype.removeEventListener = NodeList.prototype.removeEventListener || removeEventListener;

NodeList.prototype.on = NodeList.prototype.on || on;
NodeList.prototype.off = NodeList.prototype.off || off;
NodeList.prototype.once = NodeList.prototype.once || once;

Node.prototype.on = Node.prototype.on || on;
Node.prototype.off = Node.prototype.off || off;
Node.prototype.once = Node.prototype.once || once;

window.on = window.on || on;
window.off = window.off || off;
window.once = window.once || once;
