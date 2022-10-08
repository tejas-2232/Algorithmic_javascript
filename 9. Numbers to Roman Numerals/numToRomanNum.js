// a regular number
const num = 3;

// convert a number from 0 - 3000 to a roman numeral  
function convertToRomanNumeral(number) {
    // 0, 1, 2, 3, 4, ..., 9
    const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    // 0, 10, 20, 30, 40, ..., 90
    const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    // 0, 100, 200, 300, 400, ..., 900
    const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
    // 0, 1000, 2000, 3000
    const thousands = ['', 'M', 'MM', 'MMM']

    // get the value of digit in the thousandth postion (e.g. 3576 => 3) and accesses at index of the value of the digit (e.g. 3576 => thousands[3] = 'MMM')
    const thousandthDigit = thousands[Math.floor(number / 1000)];

    // get the value of digit in the hundredth postion (e.g. 3576 => 5) and accesses at index of the value of the digit (e.g. 3576 => hundreds[5] = 'D')
    const hundredthDigit = hundreds[Math.floor((number % 1000) / 100)];

    // get the value of digit in the tenth postion (e.g. 3576 => 7) and accesses at index of the value of the digit (e.g. 3576 => tens[7] = 'LXx')
    const tenthDigit = tens[Math.floor((number % 100) / 10)];

    // get the value of digit in the oneth postion (e.g. 3576 => 6) and accesses at index of the value of the digit (e.g. 3576 => ones[6] = 'VI')
    const onethDigit = ones[Math.floor((number % 10) / 1)];

    // combines the individual strings into one and returns...
    return thousandthDigit + hundredthDigit + tenthDigit + onethDigit;
}

console.log(convertToRomanNumeral(40));

/*
    I = 1
    V = 5
    X = 10
    L = 50
    C = 100
    D = 500
    M = 1000

    examples...
    II = 2
    III = 3
    IV = 4
    VI = 6
    IX = 9

    The algorithm or the plan
*/

/* Same algo using maps */

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
