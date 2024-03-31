function distinctValues(A: number[]) {
  let holdValues = new Set();
  for (let i = 0; i < A.length; i++) {
    holdValues.add(A[i]);
  }

  return holdValues.size;
}
