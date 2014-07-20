/*
 * Graph implementation, translated from Sedgewick and Wayne
 */

function Edge(start, end, weight) {
  this.v = start;
  this.w = end;
  this.weight = weight;

  this.other = function(vertex) {
    if (vertex == start) return end;
    if (vertex == end) return start;
    throw new Error("Unrecognized edge");
  }
}

function Graph(V) {
  // Constructor definition
  if (V < 0) throw new Error("Number of vertices must be nonnegative");
  this.adj = [];
  for (var i = 0; i < V; i++) {
    this.adj[i] = [];
  }
  this.E = 0;
  this.V = V;

  // Method definition
  this.addEdge = function(e) {
    //console.log(e);
    var v = e.v;
    var w = e.w;
    if (v < 0 || v > V) throw new Error("Edge out of bounds");
    if (w < 0 || w > V) throw new Error("Edge out of bounds");
    this.adj[v].push(e);
    this.adj[w].push(e);
    this.E++;
  }
}

Graph.Edge = Edge;

module.exports = Graph;