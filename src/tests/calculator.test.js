const { addition, subtraction, multiplication, division, calculate } = require("../calculator");

describe("addition", () => {
  it("should add two positive numbers", () => {
    expect(addition(2, 3)).toBe(5);
  });

  it("should add negative numbers", () => {
    expect(addition(-2, -3)).toBe(-5);
  });

  it("should add a positive and a negative number", () => {
    expect(addition(5, -3)).toBe(2);
  });

  it("should add zero", () => {
    expect(addition(5, 0)).toBe(5);
  });

  it("should handle decimal numbers", () => {
    expect(addition(1.5, 2.3)).toBeCloseTo(3.8);
  });
});

describe("subtraction", () => {
  it("should subtract two positive numbers", () => {
    expect(subtraction(5, 3)).toBe(2);
  });

  it("should subtract negative numbers", () => {
    expect(subtraction(-5, -3)).toBe(-2);
  });

  it("should subtract resulting in negative", () => {
    expect(subtraction(3, 5)).toBe(-2);
  });

  it("should subtract zero", () => {
    expect(subtraction(5, 0)).toBe(5);
  });

  it("should handle decimal numbers", () => {
    expect(subtraction(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

describe("multiplication", () => {
  it("should multiply two positive numbers", () => {
    expect(multiplication(4, 3)).toBe(12);
  });

  it("should multiply by zero", () => {
    expect(multiplication(5, 0)).toBe(0);
  });

  it("should multiply negative numbers", () => {
    expect(multiplication(-4, -3)).toBe(12);
  });

  it("should multiply positive and negative", () => {
    expect(multiplication(4, -3)).toBe(-12);
  });

  it("should handle decimal numbers", () => {
    expect(multiplication(2.5, 4)).toBe(10);
  });
});

describe("division", () => {
  it("should divide two positive numbers", () => {
    expect(division(10, 2)).toBe(5);
  });

  it("should divide resulting in decimal", () => {
    expect(division(7, 2)).toBe(3.5);
  });

  it("should divide negative numbers", () => {
    expect(division(-10, -2)).toBe(5);
  });

  it("should divide positive by negative", () => {
    expect(division(10, -2)).toBe(-5);
  });

  it("should handle division by zero", () => {
    expect(() => division(5, 0)).toThrow("Division by zero is not allowed");
  });

  it("should divide zero by a number", () => {
    expect(division(0, 5)).toBe(0);
  });
});

describe("calculate", () => {
  it("should perform addition", () => {
    expect(calculate("addition", 2, 3)).toBe(5);
  });

  it("should perform subtraction", () => {
    expect(calculate("subtraction", 5, 3)).toBe(2);
  });

  it("should perform multiplication", () => {
    expect(calculate("multiplication", 4, 3)).toBe(12);
  });

  it("should perform division", () => {
    expect(calculate("division", 10, 2)).toBe(5);
  });

  it("should throw for unknown operation", () => {
    expect(() => calculate("power", 2, 3)).toThrow("Unknown operation: power");
  });
});
