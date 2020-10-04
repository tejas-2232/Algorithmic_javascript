function sentenceCap(text) {
    let wordArray = text.toLowerCase().split(' ')

    let capsarray = []

    wordArray.forEach(word => {
        capsarray.push(word[0].toUpperCase()+ word.slice(1) )    
    });

    return capsarray.join(' ')
    
}
console.log(sentenceCap("ARTIFICIAL"))