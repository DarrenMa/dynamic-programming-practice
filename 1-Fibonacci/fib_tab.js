// get the nth position of the fibonacci sequence
// use tabulation

const fib = ((n) => {
  // create a table as large as n + 1 (+1 is for 0);
  // each position must be set with a value.
  // base case for fib is 0 = 0, 1 = 1
  let table = Array(n + 1).fill(0);
  table[1] = 1;

  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }

  return table[n];

});


console.log(fib(21));
// output: 10946
// sequence: 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946