'use strict';

const Emitter = require('events');

const emitter = new Emitter();

emitter.on('pickup', onPickup);
emitter.on('in-transit', onInTransit);
emitter.on('delivered', onDelivered);

// Functions
function onPickup(){
  console.log('Ready for Pickup!');
}

function onInTransit(){
  console.log('In-Transit to location.');
}

function onDelivered(){
  console.log('DELIVERED!!!');
}

// Event 
setTimeout(() => {
  emitter.emit('pickup');

}, 3 * 1000);

setTimeout(() => {
  emitter.emit('in-transit');

}, 3 * 1000);

setTimeout(() => {
  emitter.emit('delivered');

}, 3 * 1000);