/* https://www.interviewbit.com/problems/balanced-parantheses/ */

const TOKEN_MAP = new Map([['(', ')']]);

const isOpenSymbol = char => TOKEN_MAP.has(char);

const matches = (openChar, closeChar) => TOKEN_MAP.get(openChar) === closeChar;

const isBalanced = expression => {
  const stack = [];
  for (let char of expression) {
    if (isOpenSymbol(char)) stack.push(char);
    else if (!stack.length || !matches(stack.pop(), char)) return 0;
  }
  return !stack.length ? 1 : 0;
};