//👻 and geeks
function oddOcurrences(A: number[]) {
  if (A.length >= 1 && A.length <= 1000000 && A.length % 2 == 1) {
    for (let i = 0; i < A.length; i++) {
      const element = A[i];
      let count = 0;
      for (let j = 0; j < A.length; j++) {
        const element = A[j];
        if (A[i] == A[j]) {
          count++;
        }
      }
      if (count % 2 != 0) {
        return A[i];
      }
    }
  }
}
