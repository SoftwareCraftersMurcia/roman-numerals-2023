const { toRomanNumber } = require('../src/kata');

describe("toRomanNumber", function () {
  it.each`
    decimalNumber | expectedRomanNumber
    ${1} | ${"I"}
    ${2} | ${"II"}
    ${3} | ${"III"}
    ${4} | ${"IV"}
  `('should translate $decimalNumber to $expectedRomanNumber', ({decimalNumber, expectedRomanNumber}) => {
    const romanNumber = toRomanNumber(decimalNumber)
    expect(romanNumber).toBe(expectedRomanNumber);
  })
});
