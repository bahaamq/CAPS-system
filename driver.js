// const events = require('./events.js');

// events.on('in-transit', (payload) => {
//   console.log(`${payload} has delivered!`);
// //   events.emit('in-transit', {payload });
// });


const events = require('./events.js');

events.on('pickup ', (payload) => {

  setTimeout(function(){console.log(`DRIVER Picked up! ${payload.orderId} `);

  events.emit('in-transit', {payload });


}, 1000);
  
setTimeout(function(){ 
    
    console.log("delivered!")

  events.emit('delivered', {payload});

    ; }, 3000);


});