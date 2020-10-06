/* https://www.interviewbit.com/problems/kth-smallest-element-in-the-array/ */

const kthsmallest = (array, k) => {
  let min = Infinity;
  let max = -Infinity;

  for (let num of array) {
    max = Math.max(max, num);
    min = Math.min(min, num);
  }

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    let lt = 0;
    let eq = 0;
    let gt = 0;
    for (let num of array) {
      if (num < mid) lt++;
      else if (num > mid) gt++;
      else eq++;
    }

    if (lt < k) {
      if (lt + eq >= k) {
        min = mid;
        break;
      }
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  let res = 0;
  for(let num of array) {
    if (num <= min) res = Math.max(res, num);
  }
  return res;
};
