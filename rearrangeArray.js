/* https://www.interviewbit.com/problems/rearrange-array/ */

const rearrangeArray = a => {
  const len = a.length;

  for (let i = 0;i < len; i++){
    a[i] = parseInt(a[i]) + (a[a[i]] % len) * len;
  }
  console.log(a)
  for (let i = 0; i < len ; i++){
    a[i] = Math.floor(a[i] / len);
  }
  return a;
};

console.log(rearrangeArray([3, 0, 4, 1, 2])) /* [1, 3, 2, 0, 4] */