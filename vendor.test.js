'use strict';
const events = require('./events.js');
const logger=require('./caps.js')




describe('spy on Caps',()=>{

  let consoleSpy;
  beforeEach(()=>{
    consoleSpy = jest.spyOn(console,'log').mockImplementation();
  })
  afterEach(()=>{
    consoleSpy.mockRestore();
  })



  it('logs output', ()=>{

     logger();
    expect(consoleSpy).toHaveBeenCalled()
  })


});
