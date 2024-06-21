// given a target word, how many combinations of words from the word bank can be used to make up the target word?
// return the number of combinations
// recursion without memoization

const countConstruct = (target, wordBank) => {

  if (target.length === 0) {
    return 1;
  }

  let totalCount = 0;

  for (const word of wordBank) {
    // check if target starts with current word
    if (target.indexOf(word) === 0) {
      // remove the prefix
      const suffix = target.slice(word.length);

      const count = countConstruct(suffix, wordBank);

      totalCount += count;

    }
  }

  return totalCount;
};

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