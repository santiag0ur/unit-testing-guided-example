function sum(a, b) {
  if (a === undefined && b === undefined) {
    return 0;
  }
  if (a === undefined) {
    return b;
  }
  if (b === undefined) {
    return a;
  }
  return a + b;
}

function subtract(a, b) {
    if (a === undefined && b === undefined) {
        return 0;
      }
      if (a === undefined) {
        return b;
      }
      if (b === undefined) {
        return a;
      }
      return a - b;
}

function divide(a, b) {
if (b === 0)
{
        throw new Error('Cannot divide by 0');
}
  return a/b ;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
