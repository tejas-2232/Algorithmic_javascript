// INTRODUCTION 

// Javascript implementation to check if string has valid number of parentheses

// THE CHALLENGE 

// check whether the string has valid number of parentheses or not 

// ALGORITHMIC THINKING 


// 1. Initialize an empty stack:
// 1.1 Create an empty array called stack to serve as the stack.

// 2 Iterate through each character in the input string:
// 2.1 Use a for...of loop to iterate through each character (ch) in the given string (s).

// 3. Check for opening brackets:
// 3.1 If the current character is an opening bracket ('(', '{', '['), push it onto the stack.

// 4. Check for closing brackets:
// 4.1 If the current character is a closing bracket (')', '}', ']'):
// 4.1.1 Check if the stack is empty. If so, return false, as there is no matching opening bracket.
// 4.1.2 Check if the top of the stack matches the corresponding opening bracket. If not, return false.
// 4.1.3 If the brackets match, pop the top element from the stack.

// 5. Check for remaining elements in the stack:
// 5.1 After processing all characters in the input string, check if there are any remaining elements in the stack.
// 5.1.1 If the stack is empty, return true, indicating a valid string.
// 5.1.2 If the stack is not empty, return false, indicating an invalid string.


// CODE IMPLEMENTATION

function validString (s){
    let stack=[];
    for(let ch of s){
        if(ch=='(' || ch=='{' || ch=='[') stack.push(ch);
        else{
            if(!stack.length || (ch==')' && stack[stack.length-1]!=='(') || (ch==']' && stack[stack.length-1]!=='[') || (ch=='}' && stack[stack.length-1]!=='{')) return false;
            else stack.pop();
        }
    }
    if(stack.length==0) return true;
    else return false;
}

if(validString("()]")){
    console.log("Its a valid string");
}else{
    console.log("Its not a valid string");
}
