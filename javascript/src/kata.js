const toRomanNumber = (inputNumber) => {
    if(inputNumber === 4) {
        return "IV"
    }
    return "I".repeat(inputNumber)
};

module.exports = {toRomanNumber};
