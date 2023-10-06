const { toRomanNumber } = require('../src/kata');

describe("toRomanNumber", function () {
  it.each`
    decimalNumber | expectedRomanNumber
    ${1} | ${"I"}
    ${2} | ${"II"}
    ${3} | ${"III"}
    ${4} | ${"IV"}
    ${5} | ${"V"}
    ${6} | ${"VI"}
    ${7} | ${"VII"}
    ${8} | ${"VIII"}
    ${9} | ${"IX"}
  `('should translate $decimalNumber to $expectedRomanNumber', ({decimalNumber, expectedRomanNumber}) => {
    const romanNumber = toRomanNumber(decimalNumber)
    expect(romanNumber).toBe(expectedRomanNumber);
  })
});
