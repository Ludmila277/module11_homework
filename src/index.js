function createAdder(a) {
  return function addA(b) {
    if (typeof b !== "number") {
      return "Данные введены неверно";
    };
    return a + b;
  };
};

module.exports = createAdder;

