/* https://www.interviewbit.com/problems/count-and-say/ */

const generateValue = input => {
  if (input.length === 1) return `1${input}`;

  let result = '';
  let current = input[0];
  let count = 1;

  for (let i = 0; i < input.length; i++) {
    if (current !== input[i + 1]) {
      result += `${count}${current}`;
      current = input[i + 1];
      count = 1;
    } else count++;
  }

  return result;
};

const countAndSay = n => {
  let val = '1';
  for (let i = 1; i < n; i++) {
    val = generateValue(val);
  }
  return val;
};
