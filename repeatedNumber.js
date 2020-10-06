/* https://www.interviewbit.com/problems/find-duplicate-in-array/ */

const repeatedNumber = array => {
  const set = new Set();

  for (let num of array) {
    if (set.has(num)) return num;
    else set.add(num);
  }

  return -1;
};
