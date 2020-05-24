/* https://www.interviewbit.com/problems/colorful-number/ */

const colorful = number => {
  const set = new Set();
  const nums = [...String(number)];

  for (let i = 0; i < nums.length; i++) {
    let prev = 1;
    for (let j = i; j < nums.length; j++) {
      const product = prev * nums[j];
      if (set.has(product)) return 0;
      else set.add(product);
      prev = product;
    }
  }

  return 1;
};