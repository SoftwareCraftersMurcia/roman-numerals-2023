const { toRomanNumber } = require('../src/kata');

describe("Roman numbers", function () {
  it("1 must be I", function () {
    const romanNumber = toRomanNumber(1)
    expect(romanNumber).toBe("I");
  });
});


