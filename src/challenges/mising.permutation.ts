//👻
function permutationMissingEl(A: number[]) {
  const highest: number = Math.max.apply(Math, A);
  return perm(A, highest);
}

function perm(list: number[], highest: number) {
  let expectedPerm = 1;
  let permVal = 1;
  for (let i = 1; i < highest + 1; i++) {
    expectedPerm *= i;
  }
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    permVal *= element;
  }

  return expectedPerm / permVal;
}
console.log(solutionI([1, 2, 4, 3, 5, 6, 8]));

//online
function solutionI(A: Array<number>) {
  if (!A.length) return 1;
  let n = A.length + 1;
  return n + (n * n - n) / 2 - A.reduce((a, b) => a + b);
}
