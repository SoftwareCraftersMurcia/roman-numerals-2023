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
            case 100:
                return 'C';
                break;
        }
  };

}


module.exports = {RomanNumerals};
