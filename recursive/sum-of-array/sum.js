/* Prints the sum of the numbers in an array */

function sum(list) {
  var len = list.length;

  if (len > 1) {
    return list[len - 1] + sum(list.slice(0, len - 1));
  }
  else {
    return list[len - 1];
  }
}

var numbers = [2, 4, 5, 1, 9, 10]; 
console.log("Sum of array [" + numbers.join(',') + '] = ' + sum(numbers));
