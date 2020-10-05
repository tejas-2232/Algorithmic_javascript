/*
***********************************************************************************************
Given a string of text containing 0 or more vowels, count the number 
of vowels that can be found within the text. 
************************************************************************************************
We can breakdown the solution to this challenge in three steps generally:
    1.We write a function that’d receive a parameter called text. It would 
        be a string of any length which would be passed to the function as an argument when it is called.
    2.Next, within the function we have to go through the text and search for occurrences of the English
        vowels (a,e,i,o,u).
    3.The function then returns the total number of matches(vowels) found. 
        This brings return statements to mind as they simply stop the execution of
        a function and return a value from that function. 
*/

// #1.Using Iterative approach

const vowel = ["a", "e", "i", "o", "u"];

function vowelcnt(text) {
    let counter = 0;

    //Loop through text to test if each character is a vowel
    for (let letter of text.toLowerCase()) {
        if (vowel.includes(letter)) {
            counter++;
        }
    }

    // Return number of vowels

    return counter;
}

console.log(vowelcnt("i love HacktoberFest"))
