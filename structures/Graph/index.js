import Queue from '../Queue';
import Stack from '../Stack';

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return;
    }
    if (!this.adjacencyList[vertex1].includes(vertex2)) {
      this.adjacencyList[vertex1].push(vertex2);
    }
    if (!this.adjacencyList[vertex2].includes(vertex1)) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]
      || !this.adjacencyList[vertex2]
      || !this.adjacencyList[vertex1].includes(vertex2)
      || !this.adjacencyList[vertex2].includes(vertex1)
    ) {
      return;
    }
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
      .filter((item) => item !== vertex1);
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
      .filter((item) => item !== vertex2);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    const edges = this.adjacencyList[vertex];
    for (let i = 0; i < edges.length; i++) {
      this.removeEdge(vertex, edges[i]);
    }
    delete this.adjacencyList[vertex];
  }

  DFSRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    function helper(vertex) {
      if (!vertex) {
        return;
      }

      visited[vertex] = true;
      result.push(vertex);
      const neighbours = adjacencyList[vertex];
      neighbours.forEach((item) => {
        if (!visited[item]) {
          helper(item);
        }
      })
    }

    helper(start);

    return result;
  }

  DFSIterative(start) {
    const result = [];
    const visited = {};
    const stack = new Stack();
    let currentVertex;
    stack.push(start);
    while (stack.size > 0) {
      currentVertex = stack.pop().value;
      if (visited[currentVertex]) {
        continue;
      }

      result.push(currentVertex);
      visited[currentVertex] = true;
      const neighbours = this.adjacencyList[currentVertex];
      neighbours.forEach((item) => {
          stack.push(item);
      })
    }

    return result;
  }

  BFS(start) {
    const result = [];
    const visited = {};
    const queue = new Queue();
    let currentVertex;
    queue.enqueue(start);
    while (queue.size > 0) {
      currentVertex = queue.dequeue().value;
      if (visited[currentVertex]) {
        continue;
      }

      result.push(currentVertex);
      visited[currentVertex] = true;
      const neighbours = this.adjacencyList[currentVertex];
      neighbours.forEach((item) => {
        queue.enqueue(item);
      })
    }

    return result;
  }
}

export default Graph;
