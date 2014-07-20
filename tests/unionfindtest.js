var UnionFind = require('../src/unionfind.js');

var uf = new UnionFind(10);
uf.union(2, 3);
uf.union(4, 5);
uf.union(7, 8);
uf.union(3, 9);

console.log(uf.connected(2, 3));
console.log(uf.connected(1, 2));
console.log(uf.connected(2, 3));

console.log(uf.connected(2, 5));
uf.union(3, 4);
console.log(uf.connected(2, 5));
