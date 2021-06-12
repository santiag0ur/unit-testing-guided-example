const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
  test('should multiply two positive integers correctly', () => {
    const result = multiply(3, 2);
    expect(result).toBe(6);
  });
  test('should multiply a negative and positive integers correctly', () => {
    const result = multiply(-3, 2);
    expect(result).toBe(-6);
  });
  test('should multiply two when any of the numbers provided is 0', () => {
    const result = multiply(12, 0);
    expect(result).toBe(0);
  });
  // Our tests will be added here.
});
