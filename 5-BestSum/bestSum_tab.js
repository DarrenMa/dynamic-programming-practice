// for a target sum, return the best way to make up that sum with the numbers provided.
// the best way means the combination with least numbers required
// note: careful, greedy method isn't always the most optimal combination

const bestSum = ((targetSum, numbers) => {

  let table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (const num of numbers) {
        let combo = [...table[i], num];
        if (i + num <= targetSum) {
          if (table[i + num] === null ||
            table[i + num].length > combo.length) {
            table[i + num] = combo;
          }
        }
      }
    }
  }

  return table[targetSum];
});

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [5, 3]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]
