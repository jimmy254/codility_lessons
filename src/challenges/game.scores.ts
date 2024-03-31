//👻 solution
function gameScores(ops: Array<string>) {
  if (ops.length > 0 && ops.length <= 1000) {
    var scores: Array<number> = [];
    var sum = 0;

    for (let index = 0; index < ops.length; index++) {
      const element = ops[index];
      switch (element) {
        //double the last element in our created list aka scores[]
        case "D":
          let dValue = scores.slice(-1)[0] * 2;
          scores.push(dValue);
          sum += dValue;
          break;
        //pop out the last item in the scores list
        case "C":
          sum -= scores.slice(-1)[0];
          scores.pop();
          break;
        //
        case "+":
          //add two of the last values in our scores list
          let pVal = scores.slice(-2)[0] + scores.slice(-2)[1];
          scores.push(pVal);
          sum += pVal;
          break;
        default:
          //add the stringed-integer to our scores without any binary operation
          let iVal = parseInt(element);
          scores.push(iVal);
          sum += iVal;
          break;
      }
    }
    return sum;
  }
}

console.log(gameScores(["1"]));
