let ans;
const isValid = (grid, currVal, row, col) => {
  for (let i = 0; i < 9; i++) {
    if (grid[i][col] === currVal) return false;

    if (grid[row][i] === currVal) return false;
    if (
      grid[3 * Math.floor(row / 3) + Math.floor(i / 3)][
        3 * Math.floor(col / 3) + (i % 3)
      ] === currVal
    )
      return false;
  }
  return true;
};
const backtracking = (grid) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] === 0) {
        for (let k = 1; k <= 9; k++) {
          if (isValid(grid, k, i, j)) {
            grid[i][j] = k;
            if (backtracking(grid) === true) {
              return true;
            } else {
              grid[i][j] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  ans = grid;
  return true;
};

const solve = (grid) => {
  backtracking(grid);
  return ans;
};
export default solve;
