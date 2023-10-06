let { RomanNumerals } = require('../src/kata');

describe("Kata", function () {
  it("converts number 1 to roman numerals", function () {
      let romanNumerals = new RomanNumerals();
      expect(romanNumerals.convertNumerals(1)).toBe('I');
  });
});
