const { sumAsync, subtractAsync, sum, subtract } = require("./math");

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

async function test(title, callback) {
  try {
    await callback();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.error(`❎ ${title}`);
    console.error(error);
  }
}

test("sumAsync adds numbers", async () => {
  const result = await sumAsync(7, 3);
  const expected = 10;
  expect(result).toEqual(expected);
});

test("subtractAsync subtracts numbers", async () => {
  const result = await subtractAsync(7, 3);
  const expected = 4;
  expect(result).toEqual(expected);
});

test("sum adds numbers", () => {
  const result = sum(7, 3);
  const expected = 10;
  expect(result).toEqual(expected);
});

test("subtract subtracts numbers", () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toEqual(expected);
});
