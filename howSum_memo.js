// given a targetSum, show a combination of numbers that can make up that target sum
// if the sum can't be made up then return null
// memoization method
const howSum = ((targetSum, numbers, memo = {}) => {

  // check if memo contains value already
  if (targetSum in memo) {
    return memo[targetSum];
  }

  // we have successfully made up the target sum
  if (targetSum === 0) {
    return [];
  }

  // the sum can't be made up
  if (targetSum < 0) {
    return null;
  }

  for (const num of numbers) {
    const remainder = targetSum - num;
    const combination = howSum(remainder, numbers, memo);
    if (combination !== null) {
      memo[targetSum] = [...combination, num];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return memo[targetSum];
});


console.log(howSum(7, [2, 3])); // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])); // null
