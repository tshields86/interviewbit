/* https://www.interviewbit.com/problems/evaluate-expression/ */

const OPERATORS = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => Math.floor(a / b)
};

const evalRPN = array => {
  const stack = [];

  for (let item of array) {
    if (!OPERATORS[item]) {
      stack.push(Number(item));
    } else {
      const a = stack.pop();
      const b = stack.pop();
      stack.push(OPERATORS[item](b, a))
    }
  }

  return stack.pop();
};
