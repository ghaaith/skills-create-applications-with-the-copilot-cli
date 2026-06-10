#!/usr/bin/env node

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

function calculate(operation, a, b) {
  switch (operation) {
    case "add":
      return add(a, b);
    case "subtract":
      return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
      return divide(a, b);
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length !== 3) {
    console.log("Usage: node src/calculator.js <operation> <a> <b>");
    console.log("Operations: add, subtract, multiply, divide");
    process.exit(1);
  }

  const [operation, a, b] = args;
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    console.error("Error: Both arguments must be valid numbers");
    process.exit(1);
  }

  try {
    const result = calculate(operation, numA, numB);
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide, calculate };
