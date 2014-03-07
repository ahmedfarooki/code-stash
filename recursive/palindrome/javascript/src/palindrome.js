function palindrome(str) {
  if (typeof str === 'undefined') {
    return false;
  }

  if (str.length < 2) {
    return true;
  }

  if (str.charAt(0) === str.charAt(str.length - 1)) {
    return palindrome(str.slice(1, (str.length - 1)));
  }

  return false;
}

function assert(value, message) {
  var error = '';
  if (value) {
    message = "✔︎  " + message;
  }
  else {
    message = "❌✔︎ " + message;
  }
  console.log(message);
}

assert(palindrome() === false, "Should be false when no argument was supplied"); 
assert(palindrome('abba') === true, "Should be true for 'abba'"); 
assert(palindrome('test') === false, "Should be true for 'test'"); 
