const { toRomanNumber } = require('../src/kata');

describe("toRomanNumber", function () {

  it("should translate 1 to I", function () {
    const romanNumber = toRomanNumber(1)
    expect(romanNumber).toBe("I");
  });

  it("should translate 2 to II", function () {
    const romanNumber = toRomanNumber(2)
    expect(romanNumber).toBe("II");
  })

  it("should translate 3 to III", function () {
    const romanNumber = toRomanNumber(3)
    expect(romanNumber).toBe("III");
  })
});
