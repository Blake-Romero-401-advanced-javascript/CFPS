'use strict';

const eventEmitter = require('./lib/events');
// const Emitter = require('events');

// const emitter = new Emitter();

// EventEmitter.on('pickup', onPickup);
// EventEmitter.on('in-transit', onInTransit);
// EventEmitter.on('delivered', onDelivered);
eventEmitter.on('pickup', eventHandler('pickup'));
eventEmitter.on('in-transit', eventHandler('in-transit'));
eventEmitter.on('delivered', eventHandler('delivered'));



// Functions

function eventHandler(eventName){

  return payload => {

    const time = new Date();
    
    console.log('EVENT', {event:eventName, time, payload});
  }
}

// function onPickup(payload){
//   const time = new Date();
//   console.log('EVENT', { event:'pickup', time, payload });
// }

// function onInTransit(payload){
//   const time = new Date();
//   console.log('EVENT', { event:'in-transit', time, payload });
// }

// function onDelivered(payload){
//   const time = new Date();
//   console.log('EVENT', { event:'delivered', time, payload });
// }

// Event 
setTimeout(() => {
  eventEmitter.emit('pickup', {foo:'bar'});

}, 3 * 1000);

setTimeout(() => {
  eventEmitter.emit('in-transit');

}, 3 * 1000);

setTimeout(() => {
  eventEmitter.emit('delivered');

}, 3 * 1000);