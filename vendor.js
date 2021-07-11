
const faker = require('faker');
const events = require('./events.js');
require('./driver');
require('./caps');

let eve=setInterval(function(){ events.emit('pickup',
{
    storeName: faker.name.findName(), orderId: faker.datatype.uuid(),
    customerName: faker.name.findName()
    , address: faker.address.streetAddress()
}); ; }, 5000);





// Will be declared and registered cuz of the set time out.
events.on('delivered', (payload) => {

    console.log('thank you for delivering', payload)
})