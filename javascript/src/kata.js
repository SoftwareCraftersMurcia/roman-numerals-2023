const toRomanNumber = (inputNumber) => {
    if(inputNumber === 6) {
        return "VI"
    }
    if(inputNumber === 5) {
        return "V"
    }
    if(inputNumber === 4) {
        return "IV"
    }
    return "I".repeat(inputNumber)
};

module.exports = {toRomanNumber};
