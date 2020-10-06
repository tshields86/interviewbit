/* https://www.interviewbit.com/problems/nearest-smaller-element/ */

class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.size() - 1];
  }

  isEmpty() {
    return !this.size();
  }

  size() {
    return this.stack.length;
  }
}

const prevSmaller = array => {
  const stack = new Stack();
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const current = array[i];

    while (!stack.isEmpty() && stack.peek() >= current) {
      stack.pop();
    }

    if (stack.isEmpty()) result.push(-1);
    else result.push(stack.peek());

    stack.push(current);
  }

  return result;
};
