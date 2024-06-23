// can you construct the target work using any of the items within the word bank?
// items in the word bank can be reused
// return true or false
// memoization

// time complexity: O(n * m * m)
// space: O(m^2)
const canConstruct = (target, wordBank, memo = {}) => {

  if (target in memo) {
    return memo[target];
  }

  if (target === '') {
    return true;
  }

  for (const word of wordBank) {
    // check if the word matches the beginning of the target
    if (target.indexOf(word) === 0) {
      // get the suffix by removing the matching string
      const suffix = target.slice(word.length);

      if (canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return memo[target];
      }
    }

  }
  memo[target] = false;
  return memo[target];
};



console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'e',
  'ee',
  'eee',
  'eeee',
  'eeeee',
  'eeeeee',
])); // false