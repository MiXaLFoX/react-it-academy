function short(numbers) {
  const range = [...numbers].sort((a, b) => a - b).reduce((acc, curr, i) => {
    if (i === 0) {
      acc.ranges.push(curr);
      acc.rangeStart = curr;
    } else {
      if (curr === acc.prev + 1) {
        acc.ranges[acc.ranges.length - 1] = `${acc.rangeStart}-${curr}`;
      } else {
        acc.ranges.push(curr);
        acc.rangeStart = curr;
      }
    }
    acc.prev = curr;
    return acc;
  }, { ranges: [] }).ranges.join(', ');
  console.log(range);
}

short([1, 2, 3, 4, 5, 6]) // "1-6"
short([1, 2, 3, 5, 6, 8]) // "1-3, 5, 6, 8"
short([-3, -2, -1, 1, 2, 3]) // "-3--1, 1-3"