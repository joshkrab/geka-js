function sumMul(n, m) {
  let sum = 0;
  if (n < 1 || m < 1) {
    return "INVALID";
  }

  for (let i = n; i < m; i = i + n) {
    sum = sum + i;
  }
  return sum;
}

console.log(sumMul(4, -7));
