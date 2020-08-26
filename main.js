import HashTable from './structures/HashTable';
import PriorityQueue from './structures/PriorityQueue';
import MaxBinaryHeap from './structures/MaxBinaryHeap';
import SinglyLinkedList from './structures/SinglyLinkedList';
import DoublyLinkedList from "./structures/DoublyLinkedList";
import Stack from "./structures/Stack";
import Queue from "./structures/Queue";
import BinarySearchTree from "./structures/BinarySearchTree";
import Graph from "./structures/Graph";
import WeightedGraph from "./structures/WeightedGraph";

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addVertex('X');
graph.addVertex('Y');
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);
graph.addEdge('X', 'Y', 10);
// graph.addEdge('X', 'E', 10);
console.log(graph);

console.log(graph.shortestWay('A', 'Y'));;


// const bst = new BinarySearchTree();
//
// console.log(bst.insert(15));
// console.log(bst.insert(9));
// console.log(bst.insert(22));
// console.log(bst.insert(6));
// console.log(bst.insert(7));
// console.log(bst.insert(17));
// console.log(bst.insert(27));
// console.log(bst.insert(16));
// console.log(bst.insert(19));
// console.log(bst.insert(14));
//
//
// console.log(bst.depthFirstSearchInOrder());
//            15
//       9        22
//     6  14    17  27
//      7     16 19
