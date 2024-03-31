//online preferred
function tapeEquillibrium(A: number[]) {
  let leftNum = 0;
  let rightNum = A.reduce((a, b) => a + b);
  let answer = null;
  for (let i = 0; i < A.length - 1; i++) {
    leftNum += A[i];
    rightNum -= A[i];
    const diff = Math.abs(leftNum - rightNum);
    if (answer === null || answer > diff) {
      answer = diff;
    }
  }
  return answer;
}

console.log(tapeEquillibrium([14, 26, 1, 2, 98, 100, 765]));

//online 2
function tapeEquillibrium2(A: number[]) {
  let prevSum = A[0];
  let nextSum = A.slice(1, A.length).reduce((a, b) => {
    return a + b;
  });
  let min = Math.abs(nextSum - prevSum);
  for (let i = 1; i < A.length - 1; i++) {
    prevSum += A[i];
    nextSum -= A[i];
    if (Math.abs(prevSum - nextSum) < min) {
      min = Math.abs(prevSum - nextSum);
    }
  }
  return min;
}
