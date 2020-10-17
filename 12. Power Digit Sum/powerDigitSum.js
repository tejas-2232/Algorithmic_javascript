/*
***********************************************************************************************
Given a number along with the exponential number whose exponential number can be a positive
or negative number. after getting the exponential result, sum the number of digits from the
exponential result. 
************************************************************************************************
*/

// #1.Using Iterative and type casting approach

function powerDigitSum(num, pow){
    let sum = 0
    for (let digit of Math.pow(num, pow).toString()){
      if (digit === '.'){  //checking for point (if exponential is negative)
        continue;
      }
      sum += digit*1
    }
    return sum
}

console.log(powerDigitSum(2, 16))
console.log(powerDigitSum(2, -5))
