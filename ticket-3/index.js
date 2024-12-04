function countNumberOfNinesInNumber(number) {
  let count = 0;
  let stringNumber = number.toString();

  for (let i = 0; i < stringNumber.length; i++) {
    const digit = stringNumber[i];
    if ("9" === digit) {
      count++;
    }

  }

  return count;
}
