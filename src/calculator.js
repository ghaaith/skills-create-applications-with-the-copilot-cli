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

function modulo(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error("Cannot calculate square root of a negative number");
  }
  return Math.sqrt(n);
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
    case "modulo":
      return modulo(a, b);
    case "power":
      return power(a, b);
    case "squareRoot":
      return squareRoot(a);
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const ops2 = ["addition", "subtraction", "multiplication", "division", "modulo", "power"];
  const ops1 = ["squareRoot"];

  if (args.length < 2) {
    console.log("Usage: node src/calculator.js <operation> <a> [b]");
    console.log("Two-argument operations: addition, subtraction, multiplication, division, modulo, power");
    console.log("One-argument operations: squareRoot");
    process.exit(1);
  }

  const [operation, a, b] = args;
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA)) {
    console.error("Error: First argument must be a valid number");
    process.exit(1);
  }

  if (ops2.includes(operation) && isNaN(numB)) {
    console.error("Error: Second argument must be a valid number");
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

module.exports = { addition, subtraction, multiplication, division, modulo, power, squareRoot, calculate };
