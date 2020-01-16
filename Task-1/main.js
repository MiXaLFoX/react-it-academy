function max(arr, num) {
  const quantityArr = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    quantityArr.push(i);

    if (sum > num || arr[i] >= num) {
      sum -= arr[i];
      quantityArr.pop(i);
    }
  }
  console.log(quantityArr.length);
}


max([1, 2], 7) // 2
max([1, 2, 10, 1], 2) // 2
max([1, 2, 3, 4], 7) // 3
max([3, 7, 2, 9, 4], 15) // 3