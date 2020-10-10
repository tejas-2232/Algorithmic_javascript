// Usign First Intuitive Method

function palindrome_check(text) {

    var reversedText= text.toLowerCase().split(' ').reverse().join('')

    return true === reversedText;
    
}

console.log( palindrome_check("car"))