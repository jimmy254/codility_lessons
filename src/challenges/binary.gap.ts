//👻 solution
function binaryGap(decimal: any) {
  if (
    decimal === parseInt(decimal, 10) &&
    decimal >= 1 &&
    decimal <= 2147483647
  ) {
    let count: number = 0;
    let max: number = 0;
    let list: Array<number> = [];
    const binary: string = decimal.toString(2);
    for (let index = 0; index < binary.length; index++) {
      const element: string = binary[index];
      if (element == "1") {
        list.push(count);
        count = 0;
      } else {
        count++;
      }
    }

    for (let index = 0; index < list.length; index++) {
      const element: number = list[index];
      if (element > max) {
        max = element;
      }
    }
    console.log("Binary Gap: " + max);
  }
}

////medium solution
function binaryGap2(decimal: any) {
  if (
    decimal === parseInt(decimal, 10) &&
    decimal >= 1 &&
    decimal <= 2147483647
  ) {
    const Binary = decimal.toString(2).split("");
    return getGaps(Binary, []);
  }
}
function getGaps(BinaryArray: string[], gaps: any[]) {
  const firstOne = BinaryArray.indexOf("1");
  if (firstOne > -1) {
    let NewBinaryArray = BinaryArray.slice(firstOne + 1);
    const secondOne = NewBinaryArray.indexOf("1");
    if (secondOne > 0) {
      gaps.push(secondOne);
    }
    return getGaps(NewBinaryArray.slice(secondOne + 1), gaps);
  }
  return gaps.length > 0 ? Math.max.apply(Math, gaps) : 0;
}
