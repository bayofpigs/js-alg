var IndexedHeap = require('../src/indexedheap');

var strings = ["four", "score", "and", "seven", "years", "ago", "our", "fathers", "brought", "forth"];
var heap = new IndexedHeap(strings.length, function(a, b) {
  /*
  console.log("Local Compare");
  console.log("-------------");
  console.log("First: " + a);
  console.log("Second: " + b);
  console.log();
  */
  return a.localeCompare(b);
});

for (var i = 0; i < strings.length; i++) {
  heap.insert(i, strings[i]);
}

while (!heap.isEmpty()) {
  var i = heap.delMin();
  console.log(i + ": " + strings[i]);
}
console.log();