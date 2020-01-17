function max(arr, maxNum) {
  const info = arr.reduce(
    (acc, currNum) => {
      if (acc.sum + currNum > maxNum) {
        return acc;
    }

    return {
      sum: acc.sum + currNum,
      count: acc.count + 1,
    };

  }, {sum: 0, count: 0} );
  console.log(info.count);
}

max([1, 2], 7) // 2
max([1, 2, 10, 1], 2) // 2
max([1, 2, 3, 4], 7) // 3
max([3, 7, 2, 9, 4], 15) // 3