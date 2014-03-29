/*
  Insertion Sort
*/

function swap(items, i, j) {
  var temp = items[i];
  items[i] = items[j];
  items[j] = temp;
}

function insertionSort(items) {
  if (!Array.isArray(items)) {
    throw new TypeError("insertionSort() requires param of type array");
  }
    
  if (items.length > 1) {

    for (var i=1; i < items.length; i++) {
      for (var j=i; j > 0; j--) {

        if (items[j] < items[j-1]) {
          swap(items, j, j-1);
        }
        else {
          break;
        }

      }
    }

  }

  return items;
}


var list = [4, 3, 8, 5, 2, 1];
console.log(insertionSort(list));
