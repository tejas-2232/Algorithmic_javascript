// Finding the Most Recurring Character


/* 
maxCharValue is used to store the maximum value yet encountered at the point of every iteration with the for…in loop.

maxChar is used to store the character with the highest value on every iteration.

*/
function maxRecurringChar(text) {
    let charMap = {}
    let maxCharValue = 0
    let maxChar = ''

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}

console.log(maxRecurringChar('success'))
//  will return 's' because it is occuring 3 times