const gridTraveller = (m, n, memo = {}) => {

  const key = m + ',' + n;

  if (key in memo) {
    return memo[key];
  }

  if (m === 1 && n === 1) {
    return 1;
  }

  if (m === 0 || n === 0) {
    return 0;
  }

  memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
  return memo[key];
}

console.log(gridTraveller(1, 1)); // 1
console.log(gridTraveller(8, 6)); // 792
console.log(gridTraveller(16, 18)); 
console.log(gridTraveller(18, 16));