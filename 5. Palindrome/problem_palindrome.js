// Usign First Intuitive Method

function palindrome_check(text) {
    // for types other than string like int, float, double, etc
    if(typeof text !== 'string') {
        text = text.toString();
    }
    var reversedText= text.toLowerCase().split('').reverse().join('')
    return text === reversedText;
    
}

console.log( palindrome_check(4.4))