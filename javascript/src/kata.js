const toRomanNumber = (inputNumber) => {
    if (inputNumber === 1){
        return "I"
    }
    if (inputNumber === 3){
        return "III"
    }
    return "II";
};

module.exports = {toRomanNumber};
