function pigLatin_declarative(str) {
    return str
        .replace(/^([aeiouy])(._)/, '$1$2way')
        .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
}

function pigLatin_imperative(str) {
    // Convert string to lowercase
    str = str.toLowerCase()
    // Initialize array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    // Initialize vowel index to 0
    let vowelIndex = 0;

    if (vowels.includes(str[0])) {
        // If first letter is a vowel
        return str + "way";
    } else {
        // If the first letter isn't a vowel i.e is a consonant
        for (let char of str) {
            // Loop through until the first vowel is found
            if (vowels.includes(char)) {
                // Store the index at which the first vowel exists
                vowelIndex = str.indexOf(char);
                break;
            }
        }
        // Compose final string
        return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
    }
}