// for a target string, give all the ways that it can be made up
// using words from the word bank
// time: always exponential O(n^m)
// space: O(m)

const allConstruct = ((target, wordBank) => {

  let table = Array(target.length + 1).fill().map(() => []);
  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {

    for (const word of wordBank) {

      if (target.slice(i, i + word.length) === word) {
        const currentCombinations = table[i].map((subArray) => [...subArray, word]);
        table[i + word.length].push(...currentCombinations);
      }

    }

  }

  return table[target.length];

});

console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // [ [ 'ab', 'cd', 'ef' ], [ 'abc', 'def' ] ]
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // []
console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // [ [ 'enter', 'a', 'p', 'o', 'tent', 'pot' ], [ 'enter', 'a', 'p', 'o', 'tent', 'pot' ], [ 'enter', 'a', 'p', 'o', 'tent', 'pot' ], [ 'enter', 'a', 'p', 'o', 'tent', 'pot' ], [ 'enter', 'a', 'p', 'o', 'tent', 'pot' ] ]
console.log(allConstruct('eeeeeeeeeeeeeeeeef', [
  'e',
  'ee',
  'eee',
  'eeee',
  'eeeee',
  'eeeeee',
])); // []
