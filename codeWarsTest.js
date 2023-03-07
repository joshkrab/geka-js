function sumPairs(ints, s) {
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

function revrot(str, sz) {
  if (!str || sz > str.length || sz <= 0) return '';

  let arr = str
    .match(new RegExp('.{1,' + sz + '}', 'g'))
    .filter((i) => i.length === sz);

  return arr
    .map((chunk) => {
      const checkCubes =
        chunk.split('').reduce((acc, item) => acc + Number(item) ** 3, 0) % 2;

      console.log(checkCubes);

      if (!checkCubes) return chunk.split('').reverse().join('');

      return chunk.slice(1) + chunk.slice(0, 1);
    })
    .join('');
}

console.log(revrot('733049910872815764', 5));
