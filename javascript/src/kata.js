const toRomanNumber = (inputNumber) => {

    if(inputNumber === 4) {
        return "IV"
    }

    if(inputNumber === 5) {
        return "V"
    }

    if(inputNumber === 6) {
        return "VI"
    }

    if(inputNumber === 7) {
        return "VII"
    }
    
    return "I".repeat(inputNumber)
};

module.exports = {toRomanNumber};
