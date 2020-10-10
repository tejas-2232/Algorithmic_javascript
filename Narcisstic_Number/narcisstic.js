/* 
    A Narcissistic Number is a positive number which is the sum of its own digits, 
    each raised to the power of the number of digits in a given base.

    Eg. 
    - 153 => 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
    - 1634 => 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
*/

// Algorithm using a simple loop and modulo 
function narcissisticChecker(value) {
    let digits = []
    let num = value
    while (value > 9) {
        digits.push(value % 10)
        value = Math.floor(value / 10)
    }
    digits.push(value)
    var result = 0;
    for (number of digits) {
        result += Math.pow(number, digits.length)
    }

    return result === num
}

// Algorithm using Javascript 
function narcissisticchecker(value) {
    return ('' + value).split('').reduce(function (total, num) {
        return total + Math.pow(num, ('' + value).length)
    }, 0) == value;
}

narcissisticChecker(153)
narcissisticchecker(1634)