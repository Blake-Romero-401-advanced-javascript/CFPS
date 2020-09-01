'use strict';

const emitter = require('../lib/events');

emitter.on('pickup', onPickup);

function onPickup(order){
  setTimeout(() => {
    console.log('the order from pickup');
    emitter.emit('in-transit', order);
  }, 1000);
}