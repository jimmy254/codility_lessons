//function that calculates the balanced number such that summation of all number from 1 to x == x to n
//n being the number of number provided

// correct answer with O(1) complexity
function balancedDigit(n: number) {
  //check for constraints 1 <= n <= 1000
  if (n >= 1 && n <= 1000) {
    //find the balanced value, in this case x
    const x = Math.sqrt((n ** 2 + n) / 2);
    //check for decimal sqrt. Must be a whole number
    return x - Math.floor(x) == 0 ? x : -1;
  }
}

//👻 answer with O(n**2) complexity 🤬
function myBalancedDigit(value: string) {
  const num: number = parseInt(value);
  var lSum: number = 0,
    RSum: number = 0;
  var rightList: Array<number> = [];

  function sum(fVal: number, lVal: number) {
    let avg = (fVal + lVal) / 2;
    let qty = lVal - fVal + 1;
    return avg * qty;
  }

  for (let a: number = 1; a < num + 1; a++) {
    lSum = sum(1, a);
    RSum = sum(num - a + 1, num);
    rightList.push(RSum);
    if (rightList.includes(lSum) && a > num / 2) {
      let lPosition = num - (num - a);
      let Rposition = num - rightList.indexOf(lSum);
      return Rposition - lPosition == 2 ? lPosition + 1 : -1;
    }
  }
  return -1;
}
