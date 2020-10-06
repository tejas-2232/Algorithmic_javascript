function longestWords(sentence) {
    let arrayOfMaxWords = []
    if (sentence) {
        let words = sentence.split(" ")
        let maxLength = 0;
        words.forEach((_word) => {
            let word = _word.toLowerCase();
            if (word.length > maxLength) {
                maxLength = word.length
                arrayOfMaxWords = []
                arrayOfMaxWords.push(word)
            }
            else if (word.length === maxLength && word !== arrayOfMaxWords[0]) {
                arrayOfMaxWords.push(word)
            }
        });
    }
    return arrayOfMaxWords;
}
console.log(longestWords("You are just an old antidisestablishmentarian"))
console.log(longestWords("I gave a present to my parents"))
console.log(longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo"))