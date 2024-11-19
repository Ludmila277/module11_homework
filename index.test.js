const createAdder = require("../index.js");

describe("test sum ", () => {
  it("should add  5 and 5 to equal 10", () => {
    const add5 = createAdder(5);
    const result = add5(5);
    expect(result).toBe(10);
  });
});

describe("test sum ", () => {
  it("should not return 11 when adding 5 and 5", () => {
    const add5 = createAdder(5);
    const result = add5(5);
    expect(result).not.toBe(11);
  });
});

describe("test sum ", () => {
  it("should return the correct error message for invalid input", () => {
    const add5 = createAdder(5);
    const result = typeof add5("not a number");
    expect(result).toBe("string");
  });
});
