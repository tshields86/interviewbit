/* https://www.interviewbit.com/problems/prettyprint/ */

const isInvalid = (m, r, c) => r < 0 || c < 0 || r >= m.length || c >= m.length || m[r][c] !== 0;

const prettyPrint = a => {
  if (a <= 0) return null;

  const n = a * 2 - 1;
  const matrix = [...Array(n)].map(_ => Array(n).fill(0));
  const limit = n * n;
  const dc = [1, 0, -1, 0];
  const dr = [0, 1, 0, -1];
  let dir = 0, val = a, i = 0, r = 0, c = 0;

  while (i++ < limit) {
    matrix[r][c] = val;
    r += dr[dir];
    c += dc[dir];
    if (isInvalid(matrix, r, c)) {
      r -= dr[dir];
      c -= dc[dir];
      dir = (dir + 1) % 4;
      r += dr[dir];
      c += dc[dir];
      if (dir === 0) val--;
    }
  }

  return matrix;
};
