/* Undirected Graph */
class Graph {
  constructor() {
    /*
     *  ex)
     *    nodes = {
     *      0: [ 1, 2 ],
     *      1: [ 0 ],
     *      2: [ 0 ]
     *    }
     */
    this.nodes = {};
  }

  addNode(node) {
    this.nodes[node] = this.nodes[node] || [];
  }
  //{"nodes": {"1": [2,3], "2": [3], "3": [2]}}
  contains(node) {
    return this.nodes.hasOwnProperty(node);
  }

  removeNode(node) {
    for (let key of this.nodes[node]) {
      this.removeEdge(node, key)
    }
    delete this.nodes[node]
  }

  hasEdge(fromNode, toNode) {
    for (let key of this.nodes[fromNode]) {
      if (key === toNode) {
        return true;
      }
    }
    return false;
  }

  addEdge(fromNode, toNode) {
    this.nodes[fromNode].push(toNode)
    this.nodes[toNode].push(fromNode)
  }

  removeEdge(fromNode, toNode) {
    let from = this.nodes[fromNode]
    let to = this.nodes[toNode]

    from.splice(from.indexOf(toNode), 1)
    to.splice(to.indexOf(fromNode), 1)

  }
}
module.exports = Graph;
