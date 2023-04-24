/* Roman to number using maps */

const roman = new Map(
    [
        ['I', 1], 
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]
);

function convertToNumberUsingMaps(romanNumeral) {
    let result = 0;
    let previous = 0;
    for (let i = romanNumeral.length - 1; i >= 0; i--) {
        const current = roman.get(romanNumeral[i]);
        if (current < previous) {
            result -= current;
        } else {
            result += current;
        }
        previous = current;
    }
    return result;
}

console.log(convertToNumberUsingMaps('MMMCMXLIX'));
