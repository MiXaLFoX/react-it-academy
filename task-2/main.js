function longest(str) {
  const letters = str.split('');
  const longestSet = Array.from(new Set(letters)).join('');
  return longestSet;
}

console.log(longest('abcabcbb')) // 'abc'
console.log(longest('ababcd')) // 'abcd'
console.log(longest('bbbb')) // 'b'
console.log(longest('bbbab')) // 'ba'