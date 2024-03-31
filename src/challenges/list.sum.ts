//👻 solution
function listSum(ops: Array<number>) {
  let outPutList: Array<number> = [];
  let sum = 0;

  for (let index = 0; index < ops.length; index++) {
    const element = ops[index];
    const nextElement = ops[index + 1];
    sum += element;

    //check for next element in the list to avoiding summing the last element
    if (nextElement) {
      outPutList.push(element + nextElement);
    }
  }
  //add the total sum of the initial list to the end of the list
  outPutList.push(sum);
  return outPutList;
}

console.log(listSum([2, 4, 3, 6]));
