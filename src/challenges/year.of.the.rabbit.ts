//also known as the year ot the rabbit challenge.

//👻
function roundTableMeals(A: Array<number>, B: Array<number>) {
  var rotations = 0;
  var match = false;
  var lengthOfA = A.length;
  var lengthOfB = B.length;

  if (lengthOfA == lengthOfB && lengthOfA > 0 && lengthOfA < 300) {
    for (let k = 0; k < lengthOfA; k++) {
      for (let index = 0; index < lengthOfA; index++) {
        if (A[index] == B[index]) {
          match = true;
          break;
        }
      }

      if (match) {
        rotations++;
        B.unshift(B.slice(-1)[0]);
        B.pop();
        match = false;
      }
    }

    return rotations! < A.length ? rotations : -1;
  }
}

console.log(roundTableMeals([3, 5, 0, 2, 4], [1, 3, 10, 6, 7]));
