const largestSubarraySum = require('./LargestSubarraySum.js');

describe("#largestSubarraySum", () => {

    test("it returns the largest subarray sum given an array of positive integers", () => {
      expect(largestSubarraySum([1, 100, 4, 15, 9, 30])).toEqual(159)
    })
    
    test("it returns the largest subarray sum given an array ending with negative numbers", () => {
      expect(largestSubarraySum([1, 100, 4, 15, 9, 30, -1])).toEqual(159)
    })
  
    test("it returns the largest subarray sum given an array starting with negative numbers", () => {
      expect(largestSubarraySum([-3, 1, 100, 4, 15, 9, 30])).toEqual(159)
    })
  
    test("it returns the largest subarray sum given an array starting and ending with negative numbers", () => {
      expect(largestSubarraySum([-3, 1, 100, 4, 15, 9, 30, -1])).toEqual(159)
    })
  
    test("it returns the largest subarray sum given an array with negative numbers throughout", () => {
      expect(largestSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3])).toEqual(7)
    })
  
    test("it returns the largest subarray sum given an array where sum !== 0 from left to right", () => {
      expect(largestSubarraySum([2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6)
    })
  
    test("it returns 0 given an array of all negative integers", () => {
      expect(largestSubarraySum([-1, -1, -5, -3, -7, -4, -5, -6, -100, -4])).toEqual(0)
    })
  
  })
