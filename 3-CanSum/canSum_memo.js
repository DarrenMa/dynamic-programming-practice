// Check if for a given number n, can we sum the numbers in the array to get n
// use memoization to cache the results
const canSum = ((targetSum, numbers, memo = {}) => {

  if (targetSum in memo) {
    return memo[targetSum]; // Return the cached result
  }

  if (targetSum === 0) {
    return true;
  }

  if (targetSum < 0) {
    return false;
  }

  for (const value of numbers) {
    const remainder = targetSum - value;
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true; // Cache the result only when a solution is found
      return true;
    }
  }

  memo[targetSum] = false; // Cache the false outcome to avoid recalculating
  return false;
});

console.log(canSum(300, [7, 14]));