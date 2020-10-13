//LEXICOGRAPHICALLY EQUAL STRINGS CHALLENGE:

/*
Algorithm to find whether the two given strings in text format are lexicographically equal or not.

A lexicographically equal strings are those strings which has the same length and contain the same characters in the same positions.

*/
//code Implementation
// 1. chaining all the functions that are used.


function check_lexicographic(str1,str2){

    //Step-1: Convert the strings into the arrays of character using "split()" method.
    let arr_str1=str1.split("");
    let arr_str2=str2.split("");

    //Step-2: Check whether the given strings has same lenght or not by calling "check_length()" function.
    let len=check_length(str1,str2);

    //Step-3: Check whether the given strings contain the same characters in the same positions or not by calling "check_positions()" function.
    let positions=check_positions(arr_str1,arr_str2,len);
    
    //Step-4: Return whether the strings are lexicographically equal or not.
    return positions;
}

// 2. finding length of both the strings using lenght property and comparing them .
function check_length(str1,str2){
    //Finding lengths.
    let len_str1=str1.length;
    let len_str2=str2.length;

    //Comapring lengths.
    if (len_str1===len_str2){
        return true;
    }
    else{
        return false;
 
    }
}
 
// 3. comparing positions of every characters in both the strings.
function check_positions(arr_str1,arr_str2,len){
    
    if(len===true){

        let count=0;
        //Using for loop.
        for(let i=0;i<arr_str1.length;i++){
            if (arr_str1[i]===arr_str2[i]){
                count++;
            }
        }

        //Checking whether the strings are lexicographically equal or not.
        if (count===arr_str1.length){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}

//displaying result in the console
console.log(check_lexicographic("javascript","javascript"));
