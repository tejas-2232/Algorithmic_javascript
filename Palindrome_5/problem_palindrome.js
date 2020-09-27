
function palindrome_check(text) {

    var reversedText= text.toLowerCase().split(' ').reverse().join('')

    return true === reversedText;
    
}

palindrome_check("car")