/* https://www.interviewbit.com/problems/3-sum/ */

const threeSumClosest = (nums, target) => {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let closest = target - (nums[0] + nums[1] + nums[2]);

  if (closest === 0) return target;

  for (let i = 0; i < len; i++) {
    let j = i + 1;
    let k = len - 1;

    while (j < k) {
      const diff = target - (nums[i] + nums[j] + nums[k]);
      closest = Math.abs(diff) < Math.abs(closest) ? diff : closest;
      
      if (diff === 0) {
        return target;
      } else if (diff > 0) {
        j++
      } else if (diff < 0) {
        k--;
      }
    }
  }

  return target - closest;
};

console.log(threeSumClosest([7, -6, 2, 10], 3))