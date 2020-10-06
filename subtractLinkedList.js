/* https://www.interviewbit.com/problems/subtract/ */

const getLength = node => {
  let length = 0;
  while (node) {
    length++;
    node = node.next;
  }
  return length;
};

const splitList = (head, length) => {
  const hasMiddle = length % 2 !== 0;
  const halfLength = Math.floor(length / 2);
  console.log({ head, length, hasMiddle, halfLength })

  let second = head;
  let prev = null;
  for (let i = 0; i < halfLength; i++) {
    prev = second;
    second = second.next;
  }
  prev.next = null;

  let middle;
  if (hasMiddle) {
    middle = second;
    second = second.next;
    middle.next = null;
  }

  return { first: head, middle, second };
};

const joinList = (first, middle, second) => {
  let pointer = first;
  while (pointer && pointer.next) {
    pointer = pointer.next;
  }

  if (middle) {
    pointer.next = middle;
    middle.next = second;
  } else {
    pointer.next = second;
  }

  return first;
};

const reverse = head => {
  let node = head;
  let prev = null;
  while (node) {
    const next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return prev;
};

const subtract = head => {
  if (!head.next) return head;
  // Get length
  const length = getLength(head);
  // Split list into 2 or 3 segments
  let { first, middle, second } = splitList(head, length);
  // Reverse the second segment
  second = reverse(second);
  // Modify the first segments values
  let pointer1 = first;
  let pointer2 = second;
  while (pointer1) {
    pointer1.data = pointer2.data - pointer1.data;
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  // Reverse the second segment
  second = reverse(second);
  // Join the segments back together
  return joinList(first, middle, second);
};
