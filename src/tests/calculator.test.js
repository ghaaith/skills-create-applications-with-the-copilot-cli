const { add, subtract, multiply, divide, calculate } = require("../calculator");

describe("add", () => {
  it("should add two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("should add negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it("should add a positive and a negative number", () => {
    expect(add(5, -3)).toBe(2);
  });

  it("should add zero", () => {
    expect(add(5, 0)).toBe(5);
  });

  it("should handle decimal numbers", () => {
    expect(add(1.5, 2.3)).toBeCloseTo(3.8);
  });
});

describe("subtract", () => {
  it("should subtract two positive numbers", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it("should subtract negative numbers", () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  it("should subtract resulting in negative", () => {
    expect(subtract(3, 5)).toBe(-2);
  });

  it("should subtract zero", () => {
    expect(subtract(5, 0)).toBe(5);
  });

  it("should handle decimal numbers", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

describe("multiply", () => {
  it("should multiply two positive numbers", () => {
    expect(multiply(4, 3)).toBe(12);
  });

  it("should multiply by zero", () => {
    expect(multiply(5, 0)).toBe(0);
  });

  it("should multiply negative numbers", () => {
    expect(multiply(-4, -3)).toBe(12);
  });

  it("should multiply positive and negative", () => {
    expect(multiply(4, -3)).toBe(-12);
  });

  it("should handle decimal numbers", () => {
    expect(multiply(2.5, 4)).toBe(10);
  });
});

describe("divide", () => {
  it("should divide two positive numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  it("should divide resulting in decimal", () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  it("should divide negative numbers", () => {
    expect(divide(-10, -2)).toBe(5);
  });

  it("should divide positive by negative", () => {
    expect(divide(10, -2)).toBe(-5);
  });

  it("should handle division by zero", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero is not allowed");
  });

  it("should divide zero by a number", () => {
    expect(divide(0, 5)).toBe(0);
  });
});

describe("calculate", () => {
  it("should perform addition", () => {
    expect(calculate("add", 2, 3)).toBe(5);
  });

  it("should perform subtraction", () => {
    expect(calculate("subtract", 5, 3)).toBe(2);
  });

  it("should perform multiplication", () => {
    expect(calculate("multiply", 4, 3)).toBe(12);
  });

  it("should perform division", () => {
    expect(calculate("divide", 10, 2)).toBe(5);
  });

  it("should throw for unknown operation", () => {
    expect(() => calculate("power", 2, 3)).toThrow("Unknown operation: power");
  });
});
