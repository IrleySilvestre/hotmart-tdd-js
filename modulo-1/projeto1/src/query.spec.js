const queryString = require('./query.js')
describe('Object to query String', () => {
    it('should create valid query string when an object is provider', () => {
       const obj = {
        name: 'Joaquim',
        profession: 'developer'
       } 
       expect(queryString(obj)).toBe('name=Joaquim&profession=developer');
    });
});