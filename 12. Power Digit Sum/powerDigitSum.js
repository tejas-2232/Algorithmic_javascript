/*
***********************************************************************************************
Given a number along with the exponential number whose exponential number can be a positive
or negative number. after getting the exponential result, sum the number of digits from the
exponential result. 
************************************************************************************************
*/

// #1.Using Iterative and type casting approach

// Step 1: given number M and its exponential number N, so M x M ... x M, N times.
function powerDigitSum(num, pow){
  let sum = 0

  // Step 2: iterate over the the result of exponentiation digit result.
  for (let digit of Math.pow(num, pow).toString()){

  // Step 3: if the result contain fraction, ignore/skip the point (.) using "continue" keyword.
    if (digit === '.'){  //checking for point (if exponential is negative)
      continue;
    }

  // Step 4: accumulate (sum) in "sum" variabel
    sum += digit*1 // times 1 is for converting string to number
  }

  // Step 5: return the result
  return sum
}

console.log(powerDigitSum(2, 16))
console.log(powerDigitSum(2, -5))
