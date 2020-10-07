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