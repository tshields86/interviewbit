/* https://www.interviewbit.com/problems/spiral-order-matrix-ii/ */

const isInvalid = (m, r, c) => r < 0 || c < 0 || r >= m.length || c >= m.length || m[r][c];

const generateMatrix = n => {
  if (n <= 0) return null;

  const matrix = Array.from({ length: n }, () => Array(n));
  const limit = n * n;
  const dc = [1, 0, -1, 0];
  const dr = [0, 1, 0, -1];

  let dir = 0, val = 0, r = 0, c = 0;

  while (val++ < limit) {
    matrix[r][c] = val;
    r += dr[dir];
    c += dc[dir];
    if (isInvalid(matrix, r, c)) {
      r -= dr[dir];
      c -= dc[dir];
      dir = (dir + 1) % 4;
      r += dr[dir];
      c += dc[dir];
    }
  }

  return matrix;
};
