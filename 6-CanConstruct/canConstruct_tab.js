// given a target string, check if it can be make up of words from a word bank
// items in the wordbank can be reused
// tabulation method

const canConstruct = ((targetWord, wordbank) => {
  // start by building the table
  // dealing with strings so encoding is slightly different to previous number problems
  // all values are false until proven true, except index 0 that represent ''
  let table = Array(targetWord.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= targetWord.length; i++) {
    // we only need to check ahead if current position is true
    if (table[i] === true) {

      for (const word of wordbank) {
        if (targetWord.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
  }

  return table[targetWord.length];
});


console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // false

// Step 1: Initial table setup
// Index:   0 1 2 3 4 5 6
// Target:  _ a b c d e f
// Table:  [T F F F F F F]

// Step 2: After checking 'ab'
// Index:   0 1 2 3 4 5 6
// Target:  _ a b c d e f
// Table:  [T F T F F F F]

// Step 3: After checking 'abc'
// Index:   0 1 2 3 4 5 6
// Target:  _ a b c d e f
// Table:  [T F T T F F F]

// Step 4: No match for 'cd' directly after 'ab' or 'abc'

// Step 5: After checking 'def' starting from index 3 ('c')
// Index:   0 1 2 3 4 5 6
// Target:  _ a b c d e f
// Table:  [T F T T F F T]

// Legend:
// - T: true
// - F: false
// - _: represents the start of the string (empty string '')
// - Each 'Index' corresponds to the position in the target string plus one for the empty string at the start.