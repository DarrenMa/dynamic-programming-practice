// fibonacci series using recursion
let count = 0;
const fib = ((n) => {

  if (n <= 2) {
    return 1;
  }

  console.log(`count: ${count++}`);
  return fib(n - 1) + fib(n - 2);
});

console.log(fib(7)); // 13

// 1,1,2,3,5,8,13