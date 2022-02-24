const { sum, subtract } = require("./math");

function expect(actual) {
  return {
    toEqual(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toBeGreaterThan(expected) {
      if (actual <= expected) {
        throw new Error(`${actual} is not greater than ${expected}`);
      }
    },
  };
}

let result, expected;

result = sum(7, 3);
expected = 10;
expect(result).toEqual(expected)

result = subtract(7, 3);
expected = 4;
expect(result).toEqual(expected)
