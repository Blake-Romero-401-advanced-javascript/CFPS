'use strict';

// const emitter = require('../lib/events');
const io = require('socket.io-client');
const socket = io.connect('htt[://localhost:3000');

socket.on('pickup', payload => {

  setTimeout(() => {
    console.log(`DRIVER: picked up ${order.orderID}`);
    emitter.emit('in-transit', order);
  }, 1000);
  
  setTimeout(() => {
    console.log(`DRIVER: delivered ${order.orderID}`);
    emitter.emit('delivered', order);
  }, 3000);

});

// function onPickup(order){


// }
