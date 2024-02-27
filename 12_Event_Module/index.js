////////////////////////Events Module///////////////////////
//Node.js has a built -in module, called "Events",
//where you can create -, fire, and listen for your own events.


/*In Node.js, the Event module is a core module that provides an EventEmitter class, which allows you to implement and handle custom events.
This module is particularly useful for building event - driven architectures, where different parts of your application can emit and listen for events.*/

// const EventEmitter = require('events');
// const event = new EventEmitter();


// ````````````example 1(without parameter)``````````````

// Importing the Event module
const EventEmitter = require('events');
// Creating an instance of EventEmitter
const myEmitter = new EventEmitter();
// Event listener for the 'myEvent' event
myEmitter.on('myEvent', () => {
  console.log('Event received without parameters');
});
// Emitting the 'myEvent' event/ *emit is used to trigger events*
myEmitter.emit('myEvent');


// ````````````example 2(with parameter)``````````````

// Importing the Event module
// const EventEmitter = require('events');
// Creating an instance of EventEmitter
const myEmitterr = new EventEmitter();
// Event listener for the 'myEventWithParams' event
myEmitterr.on('myEventWithParams', (param1, param2) => {
  console.log(`Event received with parameters: ${param1}, ${param2}`);
});
// Emitting the 'myEventWithParams' event with parameters
myEmitterr.emit('myEventWithParams', 'Hello', 'World');
