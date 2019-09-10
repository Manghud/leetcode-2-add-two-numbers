const addTwoNumbers = require ('./index');
describe('addTwoNumbers', () => {
  it('should be be a function', () => {
    expect(typeof addTwoNumbers).toEqual('function');
  });
});