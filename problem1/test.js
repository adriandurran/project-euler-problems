// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const multi3and5 = require('./problem1');

test('multi3and5 function is defined', () => {
  expect(multi3and5).toBeDefined();
});

test('totalMulti should equal', () => {
  expect(multi3and5()).toEqual(233168);
});
