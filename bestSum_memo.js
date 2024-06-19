// for a target sum, return the best way to make up that sum with the numbers provided.
// the best way means the combination with least numbers required
// note: careful, greedy method isn't always the most optimal combination
// use memoization

const bestSum = ((targetSum, numbers, memo = {}) => {

  if (targetSum in memo) {
    console.log(`referenced cache for ${targetSum}`);
    return memo[targetSum];
  }

  if (targetSum === 0) {
    return [];
  }

  if (targetSum < 0) {
    return null;
  }

  let shortestCombination = null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const currentCombination = [...remainderCombination, num];
      // the sum can be made up
      if (shortestCombination === null) {
        shortestCombination = currentCombination;
      } else if (currentCombination.length < shortestCombination.length) {
        shortestCombination = currentCombination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  console.log(`sum: ${targetSum} - ${shortestCombination !== null ? shortestCombination.join(', ') : 'null'}`);
  return memo[targetSum];
});

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [5, 3]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]
