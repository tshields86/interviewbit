/* https://www.interviewbit.com/problems/add-two-numbers-as-lists/ */

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const getNumFromList = node => {
  let strNum = '';
  let current = node;
  while (current) {
    strNum = `${current.data}${strNum}`;
    current = current.next;
  }
  return BigInt(strNum);
};

const getListFromNum = number => {
  let list = null;
  for (let digit of number.toString()) {
    list = new Node(Number(digit), list);
  }
  return list;
};

const addTwoNumbers = (a, b) => {
  const sum = getNumFromList(a) + getNumFromList(b);
  return getListFromNum(sum);
};
