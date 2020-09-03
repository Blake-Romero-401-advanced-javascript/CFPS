'use strict';


// const inquirer = require('inquirer');
const io = require('socket.io')(process.env.PORT || 3000);
// const slick = io.connect('http://localhost:3000/slick');
io.on('connection', (socket) => {
  const events = ['driver', 'vendor'];

  for(let eventName of events){
    registerEvent(socket, eventName);
  }
});

const vendor = io.of('/vendor');


// const eventEmitter = require('./lib/events');

// eventEmitter.on('pickup', eventHandler('pickup'));
// eventEmitter.on('in-transit', eventHandler('in-transit'));
// eventEmitter.on('delivered', eventHandler('delivered'));



// Functions

function registerEvent(socket, eventName){
  socket.on(eventName, (payload) => {
    logIt(eventName, payload);
    io.emit(eventName, payload);
  });
}

function logIt(eventName, payload){
  console.log(eventName, payload.review);
}

// Namespaces


vendor.on('connection', (socket) => {
  console.log('VENDOR CHANNEL', socket.id);

  socket.on('join', (payload) => {
    vendor.emit('joined', payload);
  });
});
//////////////////
// const driver = io.of('/driver');
// driver.on('connection', (socket) => {
//   console.log('DRIVER CHANNEL', socket.id);

//   socket.on('join', room => {
//     console.log('joined', room);
//     socket.join(room);
//   });
//////////////////
  // socket.on('accident', (payload) => {
  //   driver.to('paramedic').emit('accident', payload);
  // });
});




// function eventHandler(eventName){

//   return payload => {

//     const time = new Date();
    
//     console.log('EVENT', {event:eventName, time, payload});
//   }
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