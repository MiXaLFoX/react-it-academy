const matrix = [
  ['F', 'A', 'C', 'E'],
  ['O', 'B', 'O', 'P'],
  ['N', 'A', 'R', 'B'],
  ['E', 'A', 'N', 'D']
]

function check (arr, str) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].join('').includes(str)) {
      return true;
    }
  }

  for (let i = 0; i < arr.length; i++){
    let newArr = [];
    for (let j = 0; j < arr[i].length; j++) {
      newArr.push(arr[j][i]);
    }

    if(newArr.join('').includes(str)) {
      return true;
    }
  }
  return false;
}

console.log(check(matrix, 'FACE')) // true
console.log(check(matrix, 'CORN')) // true
console.log(check(matrix, 'AND')) // true
console.log(check(matrix, 'FONT')) // false