/* Calculating the factorial of a number */
/* factorial of 5: 1 * 2  * 3 * 4 * 5 = 120 */

function factorial(n) {
  if (n <= 1) return n;

  return n * factorial(n-1);
}

console.log("5 factorial: " + factorial(5));
console.log("9 factorial: " + factorial(9));
