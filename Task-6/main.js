function missed(arr) {
  const sortedArr = arr.sort((a, b) => b - a);

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i + 1] !== undefined && sortedArr[i] - sortedArr[i + 1] !== 1) {
      return sortedArr[i+1] + 1;
    }
  }
}

console.log(missed([0, 1, 3])) // 2
console.log(missed([-2, 0, 1, 2])) // -1
console.log(missed([1, 3, 2, -1])) // 0
console.log(missed([1, 3, 2, -1, 0])) //