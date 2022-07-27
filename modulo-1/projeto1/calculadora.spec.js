const sum = require('./calculadora.js')

it("should sum 2 an 9 the result 4", async () => {
  expect(sum(2,4)).toBe(2+4);

});

it('should 2 and 2 even if one of them is a string', () => {
  expect(sum('2', '2')).toBe(4);
  
});

it('should throw an error in the method', () => {
  expect(() => {
    sum('', '2')
  }).toThrowError();

  expect(() => {
    sum([2,2])
  }).toThrowError();

  expect(() => {
    sum({})
  }).toThrowError();

  expect(() => {
    sum()
  }).toThrowError();
});
