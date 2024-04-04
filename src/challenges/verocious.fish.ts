function verociuosFish(A: any[], B: any[]) {
  const preZeroes = B.indexOf(1);
  let survivors = 0;
  if (A.length == B.length) {
    //remove fishes moving upstream with no opposition 😂
    if (preZeroes > 0) {
      survivors = +preZeroes;
      A.splice(0, preZeroes);
      B.splice(0, preZeroes);
    }
    while (
      B.lastIndexOf(0) > B.indexOf(1) &&
      B.indexOf(1) > -1 &&
      B.lastIndexOf(0) > -1
    ) {
      for (let fish = 0; fish < A.length; fish++) {
        let nextFish = fish + 1;
        //if two fish meet remove one that is eaten
        if (B[fish] == 1 && B[nextFish] == 0) {
          if (B[fish] > B[nextFish]) {
            B.splice(nextFish, 1);
            A.splice(nextFish, 1);
          } else {
            B.splice(fish, 1);
            A.splice(fish, 1);
          }
        }
      }
    }
    return A.length + survivors;
  } else {
    return "Uneven Arrays";
  }
}

console.log(verociuosFish([4, 2, 1, 3, 5], [1, 1, 0, 0, 0]));
