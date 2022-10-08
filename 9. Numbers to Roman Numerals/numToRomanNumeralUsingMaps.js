/* Numbers to Roman Numerals using maps */

const roman = new Map(
    [
        [1, 'I'], [2, 'II'], [3, 'III'], [4, 'IV'],
        [5, 'V'], [6, 'VI'], [7, 'VII'], [8, 'VIII'], [9, 'IX'],
        [10, 'X'], [20, 'XX'], [30, 'XXX'], [40, 'XL'], 
        [50, 'L'], [60, 'LX'], [70, 'LXX'], [80, 'LXXX'], [90, 'XC'],
        [100, 'C'], [200, 'CC'], [300, 'CCC'], [400, 'CD'], 
        [500, 'D'], [600, 'DC'], [700, 'DCC'], [800, 'DCCC'], [900, 'CM'],        
        [1000, 'M'] , [2000, 'MM'], [3000, 'MMM']
    ]
);

function convertToRomanNumeralUsingMaps(number) {
    const thousandthDigit = Math.floor(number / 1000);
    const hundredthDigit = Math.floor((number % 1000) / 100);
    const tenthDigit = Math.floor((number % 100) / 10);
    const onethDigit = Math.floor((number % 10) / 1);

    return roman.get(thousandthDigit * 1000) + roman.get(hundredthDigit * 100) + roman.get(tenthDigit * 10) + roman.get(onethDigit * 1);
}

console.log(convertToRomanNumeralUsingMaps(3999));
