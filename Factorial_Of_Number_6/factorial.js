
//1. Using For Loop.

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  let n = 4;
  answer = factorial(n)
  console.log("The factorial of " + n + " is " + answer);


//2. Using Recursion.

function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}
let n = 4;
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);