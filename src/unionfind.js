/* Union Find Data structure. 
 * Based on the Java implementation from Sedgewick and Wayne. */
function UnionFind(N) {
  // The "parent" of the given element
  var id = [];
  for (var i = 0; i < N; i++) id[i] = i;

  // The size of the element (it's weight)
  var sz = Array.apply(null, new Array(N)).map(Number.prototype.valueOf, 1);
  count = N;

  /* Private helper methods */
  var find = function(p) {
    while (p != id[p]) {
      // Path compression
      id[p] = id[id[p]];
      p = id[p];
    }
    return p;
  }

  this.union = function(p, q) {
    var i = find(p);
    var j = find(q);

    if (i == j) return; // already in the same union

    // Make smaller root point to the larger one
    if (sz[i] < sz[j]) { 
      id[i] = j; 
      sz[j] += sz[i];
    } else {
      id[j] = i;
      sz[i] += sz[j];
    }
    count--; 
  }
  
  // Are p and q connected?
  this.connected = function(p, q) {
    return find(p) == find(q);
  }
  
  // The number of elements in this union find instance
  this.count = function() {
    return count;
  } 
}

module.exports = UnionFind;
