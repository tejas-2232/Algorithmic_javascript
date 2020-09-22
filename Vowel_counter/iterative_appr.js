const vowel = ["a","e","i","o","u"];

function vowelcnt(text){
 let counter= 0;
 
 //Loop through text to test if each character is a vowel
 for (let letter of text.toLowerCase()){
     if(vowel.includes(letter)){
         counter++;
     }
 }
 // Return number of vowels

 return counter;
}