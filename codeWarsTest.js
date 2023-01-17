function sumPairs (ints, s) {
  let result = undefined;
  let secondIndex = ints.length;

  for (let i = 0; i < ints.length; i++) {
    for (let j = i + 1; j < ints.length; j++) {

      if (ints[i] + ints[j] === s && j < secondIndex) {
        result = [ints[i], ints[j]];
        secondIndex = j;
      }

    }
  }

  return result;
}
// console.log(sumPairs([0, 2, 0], 0));