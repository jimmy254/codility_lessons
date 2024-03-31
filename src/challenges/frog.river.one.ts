function frogRiverOne2(X: number, A: number[]) {
  let holdValues = new Set();
  for (let i = 0; i < A.length; i++) {
    holdValues.add(A[i]);
    if (holdValues.size == X) return i;
  }

  return -1;
}

//online O(N2)
function frogRiverOne(X: number, A: number[]) {
  var leaves = [];
  var i = 0;
  var result = -1;

  for (i = 0; i < A.length; i++) {
    if (typeof leaves[A[i]] == "undefined") {
      leaves[A[i]] = i;
      console.log(leaves, "1");
    }
  }

  if (leaves.length <= X) {
    return -1;
  }

  for (i = 1; i <= X; i++) {
    if (typeof leaves[i] == "undefined") {
      return -1;
    } else {
      result = Math.max(result, leaves[i]);
    }
  }

  return result;
}
