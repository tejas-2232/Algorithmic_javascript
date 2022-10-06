/**
 * There is a given string input and
 * this script will create all permutations of this string.
 *
 * * With input 'aabb'
 * * Thre result will be ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
 *
 */

let input = 'aabb';

// variable that will store all permutations
let permutations = [];
function permute(str, arr) {
  if (arr.length == 0 && !permutations.includes(str)) {
    permutations.push(str);
  } else {
    for (let i = 0; i < arr.length; i++) {
      let arr2 = arr.slice();
      arr2.splice(i, 1);
      permute(str + arr[i], arr2);
    }
  }
}

// call the function for the permutation
permute('', input.split(''));
// print the result
console.log(permutations);
