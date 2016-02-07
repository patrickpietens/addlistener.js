'use strict';

/**
 * Adds addEventListener function to NodeList objects
 * @param  {[type]}   eventName String representing the event name to listen to
 * @param  {function} handler   Function which is executed if the event is triggered
 */
NodeList.prototype.addEventListener = function (eventName, handler) {
    [].forEach.call(this, (element) => {
        element.addEventListener(eventName, handler);
    });
};

/**
 * Adds removeEventListener function to NodeList objects
 * @param  {[type]}   eventName String representing the event name to listen to
 * @param  {function} handler   Function which is executed if the event is triggered
 */
NodeList.prototype.addEventListener = function (eventName, handler) {
	[].forEach.call(this, (element) => {
        element.removeEventListener(eventName, handler);
    });
};

/**
 * Adds shortcuts for the addEventListener methods
 * @param  {[type]}   eventName String representing the event name to listen to
 * @param  {function} handler   Function which is executed if the event is triggered
 */
NodeList.prototype.on = Node.prototype.on = window.on = function (eventName, handler) {
    this.addEventListener(eventName, handler);
};

/**
 * Adds shortcuts for the removeEventListener methods
 * @param  {[type]}   eventName String representing the event name to listen to
 * @param  {function} handler   Function which is executed if the event is triggered
 */
NodeList.prototype.off = Node.prototype.off = window.off = function (eventName, handler) {
    this.removeEventListener(eventName, handler);
};
