// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function multi3and5() {
  const multi = [];
  for (let i = 1; i < 1000; i++) {
    multi3.push(i * 3);
    multi.push(i * 5);
  }
}

module.exports = multi3and5;
