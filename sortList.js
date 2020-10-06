/* https://www.interviewbit.com/problems/sort-list/ */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const llMiddle = (head) => {
  if (head === null) {
    return head;
  }

  let slow = head;
  let fast = head;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const merge = (a, b) => {
  let result = new Node(null);
  let pointer = result;

  while (a && b) {
    if (a.data <= b.data) {
      pointer.next = a;
      a = a.next;
    } else {
      pointer.next = b;
      b = b.next;
    }
    pointer = pointer.next;
  }

  while (a) {
    pointer.next = a;
    a = a.next;
    pointer = pointer.next;
  }

  while (b) {
    pointer.next = b;
    b = b.next;
    pointer = pointer.next;
  }

  return result.next;
};

const mergeSortLinkedList = head => {
  if (head === null || head.next === null) {
    return head;
  }

  const middle = llMiddle(head);
  const middleNext = middle.next;
  middle.next = null;

  const left = mergeSortLinkedList(head);
  const right = mergeSortLinkedList(middleNext);
  return merge(left, right);
};

const sortList = head => {
  return mergeSortLinkedList(head)
};
