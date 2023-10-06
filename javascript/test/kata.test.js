const { toRomanNumber } = require('../src/kata');

describe("Roman numbers", function () {

  test("1 is translated to I", function () {
    const romanNumber = toRomanNumber(1)
    expect(romanNumber).toBe("I");
  });

  test("2 is translated to II", function () {
    const romanNumber = toRomanNumber(2)
    expect(romanNumber).toBe("II");
  })

});


