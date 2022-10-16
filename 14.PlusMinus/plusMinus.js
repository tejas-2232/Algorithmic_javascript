/* Plus Minus 

Problem: Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal. The function will not return a value; just prints to the console.

nums = [1, 1, 0, -1, -1] 
output = 
0.400000
0.400000
0.200000

Approach
- edge case: if array is empty we'll return 0 
- initialize vars for positive, negative and zero
- iterate over input array once
- check: if current element at i is positive? 
-- increase positive count by 1
- check: if current element at i is negative? 
-- increase negative count by 1
- check: if current element at i is zero? 
-- increase zero count by 1
- console.log(positive/length of array).toFixed(6)
- console.log(negative/length of array).toFixed(6)
- console.log(zero/length of array).toFixed(6)

Time: O(n) where n is length of input array 
Space: O(1) we don't incur extra memory

*/ 

function plusMinus(nums) {
    // edge case: if nums array is empty we return a 0
    if(nums.length === 0) console.log(0); 
    let positive = 0;
    let negative = 0;
    let zeros = 0; 
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) {
            positive++; 
        } else if(nums[i] < 0) {
            negative++; 
        } else {
            zeros++; 
        }; 
    };
    console.log((positive/nums.length).toFixed(6)); 
    console.log((negative/nums.length).toFixed(6)); 
    console.log((zeros/nums.length).toFixed(6)); 
}; 

console.log(plusMinus([1, 1, 0, -1, -1])); 
// 0.400000
// 0.400000
// 0.200000