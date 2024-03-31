//👻 & stack
function cyclicRotationSolution(A: number[], K: number) {
  const listLength = A.length;
  let rotations: number = 0;
  if (listLength > 100 || listLength < 0 || K > 100 || K < 0) {
    console.log("yoh");
  }
  if (listLength == K) {
    return A;
  }
  if (K > listLength) {
    rotations = K % listLength;
  }
  const part2 = A.slice(listLength - K).reverse();
  const part1 = A.slice(0, listLength - K).reverse();

  const newList = part1.concat(part2).reverse();

  return newList;
}

console.log(cyclicRotationSolution([2, 3, 45, 6, 7, 0, 4, 9, 66, 48], 7));
