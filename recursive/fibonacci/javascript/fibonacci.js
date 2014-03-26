/* Fibonacci Series of numbers is:
 * 1, 1, 2, 3, 5, 8, ... 
 * This program prints n terms
 */

function fibonacci(n) {
  if (n < 2) return n;

  return fibonacci(n - 2) + fibonacci(n - 1);
}

function printSeries(n) {
  var string = '';

  for (var i=1; i<=n; i++) {
    if (string.length > 0) string += ", "; 

    string += fibonacci(i);
  }
  console.log(string);
}

printSeries(10);
