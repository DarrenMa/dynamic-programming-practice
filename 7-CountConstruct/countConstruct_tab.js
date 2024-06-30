// count how many combinations are possible to make up a strings using words from a word bank
// tabulation method

const countConstruct = ((targetWord, wordBank) => {

  let table = Array(targetWord.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= targetWord.length; i++) {
    if (table[i] > 0) {
      for (const word of wordBank) {
        if (targetWord.slice(i, i + word.length) === word) {
          table[i + word.length] += table[i];
        }
      }
    }
  }

  return table[targetWord.length];
});


console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'e',
  'ee',
  'eee',
  'eeee',
  'eeeee',
  'eeeeee',
])); // 0
