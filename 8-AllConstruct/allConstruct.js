// for a target string, give all the ways that it can be made up
// using words from the word bank
// time: always exponential O(n^m)
// space: O(m)

const allConstruct = ((target, wordBank, memo = {}) => {

  if (target in memo) {
    return memo[target];
  }

  if (target === '') {
    return [[]];
  }

  let totalCombinations = [];

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixCombos = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixCombos.map((way) => [word, ...way]);
      totalCombinations.push(...targetWays);
    }
  }

  memo[target] = totalCombinations;
  return totalCombinations;
});

console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // [ [ 'ab', 'cd', 'ef' ], [ 'abc', 'def' ] ]
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // []
console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // [ [ 'enter', 'a', 'p', 'o', 'tent', 'pot' ], [ 'enter', 'a', 'p', 'o', 'tent', 'pot' ], [ 'enter', 'a', 'p', 'o', 'tent', 'pot' ], [ 'enter', 'a', 'p', 'o', 'tent', 'pot' ], [ 'enter', 'a', 'p', 'o', 'tent', 'pot' ] ]
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'e',
  'ee',
  'eee',
  'eeee',
  'eeeee',
  'eeeeee',
])); // []
