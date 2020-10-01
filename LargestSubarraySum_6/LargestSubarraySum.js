// Algorithm :- https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/

let largestSubarraySum = (inputArray) => {
    let currentSum = 0
    let largestSum = 0

    for(let number of inputArray){
        currentSum = Math.max(0, (currentSum + number))
        largestSum = Math.max(largestSum, currentSum)
    }
    
    return largestSum
  
}

module.exports = largestSubarraySum
