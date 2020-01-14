function missed(arr) {
  const sorted = arr.sort((a, b) => b - a);
  console.log(sorted);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] - sorted[i + 1] !== 1) {
      return sorted[i+1] + 1;
    }
  }
}

console.log(missed([0, 1, 3])) // 2
console.log(missed([-2, 0, 1, 2])) // -1
console.log(missed([1, 3, 2, -1])) // 0