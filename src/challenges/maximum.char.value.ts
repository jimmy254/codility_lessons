//👻 solution

//function takes in a stringed integer and returns the maximum value possible with the highest character summation and is less than the provided number
function highestStringSum(z: string) {
  let firstVal;
  let arr = z.split("");
  let arrLen = arr.length;
  //Return string if criteria is not met. any number with 2 or more non-zero digits is more than 9
  if (parseInt(z) > 1000000 || parseInt(z) < 10 || arrLen < 2) {
    return z;
  }
  //strip zeros before the digits. eg 00012 -> 12
  while (arr.indexOf("0") == 0) {
    arr.splice(0, 1);
  }
  //redeclare respective variables
  z = arr.reduce((a, b) => a + b);
  arrLen = arr.length;
  let zeroIndex = arr.indexOf("0");
  //check for zero digit in the number and produce a new initial value z
  if (arr.includes("0")) {
    for (let index = zeroIndex; index < arrLen; index++) {
      arr[index] = "0";
    }
    let newValue = arr.reduce((a, b) => a + b);
    firstVal = parseInt(newValue) - 1;
    z = firstVal.toString();
  }
  // computation for non-zeroed integers
  firstVal = (parseInt(z) - 1).toString();
  let newFVal = parseInt(arr[0]) - 1;
  let nines = arrLen - 1;
  let finVal = newFVal.toString();
  for (let index = 0; index < nines; index++) {
    finVal += "9";
  }
  //compare character values to between the first value(z-1) and the calculated value to get the highest sum of characters
  return firstVal
    .split("")
    .map((a) => parseInt(a))
    .reduce((a, b) => a + b) >=
    finVal
      .split("")
      .map((a) => parseInt(a))
      .reduce((a, b) => a + b)
    ? firstVal
    : finVal;
}

console.log(highestStringSum("40"));

//...AND IT WAS GOOD 👻
