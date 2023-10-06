class RomanNumerals {
     convertNumerals = (number) => {
        switch (number) {
            case 1:
                return 'I';
                break;
            case 5:
                return 'V';
                break;
            case 10:
                return 'X';
                break;
            case 50:
                return 'L';
                break;
        }
  };

}


module.exports = {RomanNumerals};
