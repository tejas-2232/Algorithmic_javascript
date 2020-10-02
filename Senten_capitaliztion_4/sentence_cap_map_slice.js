/* 
The .map method is used to create a new array with the results 
gotten from calling a provided function on every element in the
array on which it is called.
 */

 function sentenceCap(text){

    let wordsArray = text.toLowerCase().split(' ')

    let caparray = wordsArray.map(word => {
        return word[0].toUpperCase() + word.slice(1)
        
    });

    return caparray.join(' ')
 }

 console.log(sentenceCap("friends"))

 console.log(sentenceCap("PEOPLE"))
