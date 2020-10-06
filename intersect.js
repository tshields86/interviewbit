/* https://www.interviewbit.com/problems/intersection-of-sorted-arrays/ */

const intersect = (A, B) => {
  const intersection = [];

  for (let a = 0, b = 0; a < A.length && b < B.length;) {
    const aVal = A[a];
    const bVal = B[b];
    if (aVal < bVal) {
      a++;
    } else if (aVal > bVal) {
      b++;
    } else if (aVal === bVal) {
      intersection.push(aVal);
      a++;
      b++;
    }
  }

  return intersection;
};