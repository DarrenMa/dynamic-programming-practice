// Check if for a given number n, can we sum the numbers in the array to get n
// recursive solution
const canSum = ((targetSum, values) => {

  if (targetSum === 0) {
    return true;
  }

  if (targetSum < 0) {
    return false;
  }

  for (const value of values) {
    const remainder = targetSum - value;
    if (canSum(remainder, values) === true) {
      return true;
    }
  }
  return false;
});

console.log(canSum(7, [2, 4])); 
