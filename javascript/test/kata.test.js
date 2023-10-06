let { RomanNumerals } = require('../src/kata');

describe("Kata", function () {
  it("converts number 1 to roman numerals", function () {
      let romanNumerals = new RomanNumerals();
      expect(romanNumerals.convertNumerals(1)).toBe('I');
  });

  it("converts number 5 to roman numerals", function () {
    let romanNumerals = new RomanNumerals();
    expect(romanNumerals.convertNumerals(5)).toBe('V');
  });

  it("converts number 10 to roman numerals", function () {
    let romanNumerals = new RomanNumerals();
    expect(romanNumerals.convertNumerals(10)).toBe('X');
  });

  it("converts number 50 to roman numerals", function () {
    let romanNumerals = new RomanNumerals();
    expect(romanNumerals.convertNumerals(50)).toBe('L');
  });

  it("converts number 100 to roman numerals", function () {
    let romanNumerals = new RomanNumerals();
    expect(romanNumerals.convertNumerals(100)).toBe('C');
  });
});
