// fibonacci series using memoization
let count = 0;
const fib = ((n, memo = {}) => {

  if (n in memo) {
    return memo[n];
  }

  if (n <= 2) {
    return 1;
  }

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  console.log(`count: ${count++}`);
  return memo[n];
});

console.log(fib(7)); // 13

// 1,1,2,3,5,8,13