/* https://www.interviewbit.com/problems/diffk/ */

const diffPossible = (nums, k) => {
  if (nums.length <= 1) return 0;
  if (nums[nums.length - 1] < k) return 0;

  let i = 0;
  let j = 1;

  while (j !== nums.length) {
    const diff = nums[j] - nums[i];

    if (diff === k) return 1;
    else if (diff < k) {
      j++;
    } else if (diff > k) {
      i++;
      if (i === j) {
        j++;
      }
    }
  }

  return 0;
};

console.log(diffPossible([1, 2, 2, 3], 0))