


function sentenceCap(text) {

    let wordsarray = text.toLowerCase().split(' ')

    let capsArray = wordsarray.map(word => {
        return word.replace(word[0], word[0].toUpperCase())
        
    });

    return capsArray.join(' ')
    
}

console.log(sentenceCap("influence"))
