#!/usr/bin/env node

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

function calculate(operation, a, b) {
  switch (operation) {
    case "addition":
      return addition(a, b);
    case "subtraction":
      return subtraction(a, b);
    case "multiplication":
      return multiplication(a, b);
    case "division":
      return division(a, b);
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length !== 3) {
    console.log("Usage: node src/calculator.js <operation> <a> <b>");
    console.log("Operations: addition, subtraction, multiplication, division");
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

module.exports = { addition, subtraction, multiplication, division, calculate };
