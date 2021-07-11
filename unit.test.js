const events = require('./events.js');

const faker = require('faker');
require('./driver');
require('./caps');

describe('Event Emitter', () => {

    let consoleSpy;
    beforeEach(()=>{
      consoleSpy = jest.spyOn(console,'log').mockImplementation();

    })
    afterEach(()=>{
      consoleSpy.mockRestore();
    })

    
  
    let data={storeName: faker.name.findName(), orderId: faker.datatype.uuid(),
        customerName: faker.name.findName()
        , address: faker.address.streetAddress()}
  
  
    it("pickup eventshould go to the registere event ",()=> {
     
        events.emit('pickup', data)   
        expect(consoleSpy).toHaveBeenCalled()


      });
      it("pickup eventshould go to the registere event ",()=> {
     
        events.emit('pickup', data)   
        expect(consoleSpy).toHaveBeenCalled()


      });
          it("delivered event should go to the registere event ",()=> {
     
        events.emit('delivered', data)   
        expect(consoleSpy).toHaveBeenCalled()


      });
      it("in-transit event should go to the registere event ",()=> {
     
        events.emit('in-transit', data)   
        expect(consoleSpy).toHaveBeenCalled()


      });
  });