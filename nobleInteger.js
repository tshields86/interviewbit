/* https://www.interviewbit.com/problems/noble-integer/ */

const nobleInteger = arr => {
  arr.sort((a, b) => a - b);
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let cur = arr[i];
    if (cur === arr[i + 1]) continue;
    if (cur === len - i - 1) return 1;
  }

  return -1;
};
