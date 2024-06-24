// Check if for a given number n, can we sum the numbers in the array to get n
// tabulation solution
const canSum = ((targetSum, values) => {

  let table = Array(targetSum + 1).fill(false);
  table[0] = true; // it's true that 0 can make 0

  // +---+---+---+---+---+
  // | 0 | 1 | 2 | 3 | 4 |
  // +---+---+---+---+---+
  // | T | F | F | F | F |
  // +---+---+---+---+---+

  for (let i = 0; i <= targetSum; i++) {
    const currentPosition = table[i];
    if (currentPosition === true) {
      for (const num of values) {
        // this check makes sure the array isn't lengthened 
        if ((i + num) <= targetSum) {
          table[i + num] = currentPosition;
        } 
      }
    }
  }

  return table[targetSum];
});

// console.log(canSum(7, [2, 4]));
// // false
// console.log(canSum(7, [2, 3]));
// // true
console.log(canSum(7, [5, 3, 4, 7]));
// true

