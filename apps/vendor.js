'use strict';
//Declare a store name
//new customer order every 5 seconds
// const net = require('net');
// const emitter = require('../lib/events');
const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');
const vendorChannel = io.connect('http://localhost:3000/vendor');
const faker = require('faker');
require('dotenv').config();

// const client = new net.Socket();
vendorChannel.emit('join', '1-206-flowers');
// const host = process.env.HOST || 'localhost';
// const port = process.env.PORT || 3000;

//StoreFront
const store = process.env.StoreName;
let orderId = '1234';
let customerName = faker.name.findName();
let address = faker.address.streetAddress();

const order ={
  store,
  orderId,
  customerName,
  address,
}
//Client
// client.connect(port, host, () => {
//   console.log('[?] successfully connected to', host, ':', port);
// });

//Events
setInterval(start, 5000);

function start(){
  socket.emit('pickup', order);
}

vendorChannel.on('delivered', payload => onDelivered(payload));

function onDelivered(payload){
  console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);
}

module.exports = {start, onDelivered};