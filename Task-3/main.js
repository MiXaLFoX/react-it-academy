function longestPalindrome(str) {
  let longest = '';
  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i];
    let firstOccurance;
    for (let j = i + 1; j < str.length; j++) {
      if (currentLetter === str[j]) {
        firstOccurance = j;

        const subStr = str.slice(i, firstOccurance + 1);

        if (subStr.length > longest.length &&
          subStr.toLowerCase() === subStr.split('').reverse().join('').toLowerCase()) {
          longest = subStr;
        }
      }
    }
  }

  console.log(longest);
}

longestPalindrome('babad') // 'bab' или 'aba'
longestPalindrome('cbbd') // 'bb'
longestPalindrome('dbabddb') // 'dbabd'