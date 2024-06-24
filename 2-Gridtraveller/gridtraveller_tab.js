// given a n x m grid, find out how many combinations are available 
// for travelling from top left to bottom right
// you can only move right or down
// tabulation method

const grid = ((m, n) => {
  const numrows = m;
  const numcolumns = n;

  // first we must make a grid of (m + 1) x (n + 1)
  // + 1 is for the 0
  // because (0,0) = 0, (1,1) = 1

  let table = Array(numrows + 1).fill().map(() => Array(numcolumns + 1).fill(0));
  table[1][1] = 1;

  for (let i = 0; i <= numrows; i++) {

    for (let j = 0; j <= numcolumns; j++) {

      const currentValue = table[i][j];
      if (j + 1 <= numcolumns) {
        // add to neighbour to the right
        table[i][j + 1] += currentValue;
      }

      if (i + 1 <= numrows) {
        // add to neighbour below
        table[i + 1][j] += currentValue;
      }

    }

  }

  console.log(table[m][n]);

});


grid(1, 1); // 1
grid(3, 3); // 6
grid(8, 6); // 792
grid(18, 16); // 565722720