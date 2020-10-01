// string reversing challenge

/*  Given a string of text, write 
an algorithm that returns the text received in a reversed format.  */

//code Implementation
// 1.first method- chaining built-in method

/*
var text = "algorithm";

function reverseString(text) {
    return text.split("").reverse().join("")

}
*/

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"

}
//console.log(reverseString("hello"));

// reverseString("hello");


// 2. method: using for LOOP

function reversestring(text){

    let result = "";

    for(let i=text.length-1; i>=0; i--){
        result= result+text[i];
    }

    return result
}

console.log(reversestring("machine") ) // print the result