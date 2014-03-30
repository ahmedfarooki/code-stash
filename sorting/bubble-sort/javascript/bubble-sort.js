function swap(items, i, j) {
  var temp = items[i];
  items[i] = items[j];
  items[j] = temp;
}

function bubbleSort(items) {
  if (!Array.isArray(items)) {
    throw new TypeError("insertionSort() requires param of type array");
  }

  var len = items.length;
  if (len > 1) {

    for(var i=0; i < len; i++) {
      for(var j=1; j < len - i; j++) {

        if (items[j] < items[j-1]) {
          swap(items, j, j-1);
        }

      }
    }

  }

  return items;
}

var list = [3, 7, 6, 2, 4, 5, 1];
console.log(list);
console.log(bubbleSort(list));
