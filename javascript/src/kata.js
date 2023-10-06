const toRomanNumber = (inputNumber) => {
    if(inputNumber === 4) { return "IV" }
    if(inputNumber === 9) { return "IX" }

    if(inputNumber >= 5) {
        return "V" + "I".repeat(inputNumber - 5)
    }

    return "I".repeat(inputNumber)
};

module.exports = {toRomanNumber};
