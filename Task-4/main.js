const short = (numbers) => {
  const ranges = [...numbers].sort((a, b) => (a - b)).reduce((acc, currentNumber) => {
    let currentRangeIndex = acc.currentRangeIndex;
    let currentRange = [...(acc.ranges[currentRangeIndex] || [])];

    if (currentRange.length === 0) {
      currentRange.push(currentNumber);
    } else {
      if (currentRange[currentRange.length - 1] + 1 === currentNumber) {
        currentRange.push(currentNumber);
      } else {
        currentRange = [currentNumber];
        currentRangeIndex++;
      }
    }

    const ranges = [...acc.ranges];
    ranges[currentRangeIndex] = currentRange;

    return {
      currentRangeIndex,
      ranges,
    }
  }, {ranges: [], currentRangeIndex: 0}).ranges.map((range) => {
    if (range.length > 2) {
      return [`${range[0]}-${range[range.length - 1]}` ];
    }
    return range;
  }).map((arr) => arr.join(', ')).join(', ');

  console.log(ranges);
}


short([1, 2, 3, 4, 5, 6]) // "1-6"
short([1, 2, 3, 5, 6, 8]) // "1-3, 5, 6, 8"
short([-3, -2, -1, 1, 2, 3]) // "-3--1, 1-3"