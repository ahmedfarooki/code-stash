function palindrome(str) {
  if (typeof str === 'undefined') {
    return false;
  }
  str = str.toLowerCase();

  if (str.length < 2) {
    return true;
  }

  if (str.charAt(0) === str.charAt(str.length - 1)) {
    return palindrome(str.slice(1, (str.length - 1)));
  }

  return false;
}

console.assert(palindrome() === false, "Should be false when no argument was supplied");
console.assert(palindrome('abba') === true, "Should be true for 'abba'");
console.assert(palindrome('rAcecar') === true, "Should be true for 'rAcecar'");
console.assert(palindrome('test') === false, "Should be true for 'test'");
