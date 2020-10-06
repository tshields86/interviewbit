/* https://www.interviewbit.com/problems/numrange/ */

const countSubArrayLessThan = (arr, k) => {
  let start = 0;
  let end = 0;
  let count = 0;
  let sum = arr[0];

  while (start < arr.length && end < arr.length) {
    if (sum <= k) {
      end++;
      if (end >= start) count += end - start;
      if (end < arr.length) sum += arr[end];
    } else {
      sum -= arr[start];
      start++;
    }
  }

  return count;
};

const numRange = (arr, a, b) => {
  const x = countSubArrayLessThan(arr, a - 1);
  const y = countSubArrayLessThan(arr, b);
  return y - x;
};
