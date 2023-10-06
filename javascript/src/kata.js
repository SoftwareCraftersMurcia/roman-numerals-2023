class RomanNumerals {
     convertNumerals = (number) => {
        if (number === 1) {
          return 'I';   
        } else if (number === 5) {
            return 'V'; 
        } else if (number === 10) {
            return 'X'
        }
  };

}


module.exports = {RomanNumerals};
