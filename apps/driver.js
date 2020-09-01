'use strict';

const emitter = require('../lib/events');

emitter.on('pickup', onPickup);

function onPickup(order){
  setTimeout(() => {
    console.log('Driver picked up order #');
    emitter.emit('in-transit', order);
  }, 1000);
}