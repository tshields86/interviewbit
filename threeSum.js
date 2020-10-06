/* https://www.interviewbit.com/problems/3-sum-zero/ */

const threeSum = nums => {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  const triplets = [];

  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
  
    let j = i + 1;
    let k = len - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        triplets.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      } else if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      }
    }
  }

  return triplets;
};

const testNums = [1, -4, 0, 0, 5, -5, 1, 0, -2, 4, -4, 1, -1, -4, 3, 4, -1, -1, -3];
console.log(threeSum(testNums))