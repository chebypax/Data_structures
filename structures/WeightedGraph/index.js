import PriorityQueue from "../PriorityQueue";

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return;
    }
    if (!this.adjacencyList[vertex1].find((item) => item.node === vertex2)) {
      this.adjacencyList[vertex1].push({node: vertex2, weight});
    }
    if (!this.adjacencyList[vertex2].find((item) => item.node === vertex1)) {
      this.adjacencyList[vertex2].push({node: vertex1, weight});
    }
  }

  shortestWay(start, finish) {
    let path = [];
    const distances = {};
    const previous = {};
    const pq = new PriorityQueue();
    let smallestNode;
    Object.keys(this.adjacencyList).forEach((key) => {
      const value = key === start ? 0 : Infinity;
      distances[key] = value;
      previous[key] = null;
      pq.enqueue(key, value);
    });
    console.log(distances);
    console.log(pq);
    console.log(previous);

    while (pq.values.length > 0) {
      smallestNode = pq.dequeue().value;
      if (smallestNode === finish) {
        console.log('Complete');
        while (previous[smallestNode]) {
          path.push(smallestNode);
          smallestNode = previous[smallestNode];
        }
        path.push(start);
        path = path.reverse();
        console.log(path);
        return path;
      }

      if (smallestNode || distances[smallestNode] !== Infinity) {
        this.adjacencyList[smallestNode].forEach((item) => {
          let nextNode = item;
          let candidate = distances[smallestNode] + item.weight;
          if (candidate < distances[nextNode.node]) {
            distances[nextNode.node] = candidate;
            previous[nextNode.node] = smallestNode;
            pq.enqueue(nextNode.node, candidate);
          }
        })
      }
    }
  }
}

export default WeightedGraph;
