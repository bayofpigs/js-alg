/*
 * Indexed Min-Heap: inspired by the java implementation 
 * from Algorithms by Sedgewick and Wayne
 * algs4.cs.princeton.edu/24pq/IndexMinPQ.java.html
 */

/*
 * Initializes an empty heap with indices between 0 and size - 1
 * @param size The keys in the heap are indexed from 0 to size - 1
 * @param comparator The comparator function to be used for comparing this heap's keys. 
 *    It should take two inputs and return a negative number if the first is semantically
 *    less than the second, 0 if the first is semantically equal to the second and a 
 *    positive number if the first is semantically greater
 */
Function IndexedHeap(size, comparator) {
  if (size < 0) throw new Error("Size cannot be less than 0");

  // Set the size of the heap
  this.size = size;

  // The keys associated with the indexes of the pq
  this.keys = [];

  // The comparator function associated with this heap. Must be consistent with
  // every heap being inserted. By default the comparison is done by subtraction 
  this.comparator = comparator || function(a, b) { return a - b };

  // Binary heap using i based indexing (pq = priority queue)
  this.pq = [];

  // current size of of the heap
  this.N = 0;

  // The inverse of pq
  this.qp = [];
  for (int i = 0; i <= size; i++) qp[i] = -1;
}

/*
 * Is the heap empty?
 * @return True if the heap is empty; false otherwise
 */
IndexedHeap.prototype.isEmpty = function() {
  return this.N === 0;
}

/**
 * Is i an index on the priority queue?
 * @param i an index
 */
IndexedHeap.prototype.contains = function(i) {
  if (i < 0 || i >= this.size) throw new Error("Index out of bounds");
  return qp[i] != -1;
}

/**
 * Returns the number of keys in the heap
 * @return the number of keys in the heap
 */
IndexedHeap.prototype.size = function() {
  return this.N;
}

/**
 * Associates key with index i
 * @param key the key associated with index i
 */
IndexedHeap.prototype.insert = function(i, key) {
  if (i < 0 || i >= size) throw new Error("Invalid index");  
  if (contains(i)) throw new Error("Index is already in the priority queue");

  // Increase size
  this.N++;

  // Insert key into the pq to the end of the pq
  qp[i] = this.N;
  pq[this.N] = i;
  this.keys[i] = key;

  // Swim the key upwards in the pq
  this._swim(N);
}

/**
 * Returns an index associated with the minimum key.
 * @ returns (see above)
 */
IndexedHeap.prototype.minIndex = function() {
  if (this.N == 0) throw new Error("Priority queue underflow");
  return this.pq[1];
}

/**
 * Returns a minimum key.
 * @returns (see above)
 */
IndexedHeap.prototype.minKey = function() {

}

/*   General helper functions */
IndexedHeap.prototype._greater = function(i, j) {
  // Compare the keys associated with the pq values at i and at j
  return this.comparator(this.keys[this.pq[i]], this.keys[this.pq[j]]) > 0;
}

IndexedHeap.prototype._exch = function(i, j) {
  var swap = this.pq[i];
  
  // Set pq values
  this.pq[i] = this.pq[j];
  this.pq[j] = swap;

  // Set inverse
  this.qp[this.pq[i]] = i;
  this.qp[this.pq[j]] = j;
}

/*   Heap helper functions  */
IndexedHeap.prototype._swim = function(k) {
  // While index k is greater than 1 and k/2 (heap value above) is greater than k (heap value below)
  while (k > 1 && this._greater(k/2, k)) {
    // Swim the value upwards
    this._exch(k, k/2);
    k = k/2;
  }
}

IndexedHeap.prototype._sink = function(k) {
  // While there exists a node below
  while (2*k <= this.size) {
    // take a peek at the guys below to the left and to the right
    var j = 2*k;
    if (j < this.size && this._greater(j, j + 1)) j++;
    if (!this._greater(k, j)) break;

    // If one of the guys is smaller, swap him with k
    exch(k, j);

    // Rinse and repeat
    k = j;
  }
}
