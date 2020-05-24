/* https://www.interviewbit.com/problems/max-sum-contiguous-subarray/ */

const maxSubArray = array => {
  let maxSum = -Infinity;
  let sum = 0;

  arr.forEach(num => {
    sum += num;
    if (sum > maxSum) maxSum = sum;
    if (sum < 0) sum = 0;
  });

  return maxSum;
};