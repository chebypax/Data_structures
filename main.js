import HashTable from './structures/HashTable';
import PriorityQueue from './structures/PriorityQueue';
import MaxBinaryHeap from './structures/MaxBinaryHeap';
import SinglyLinkedList from './structures/SinglyLinkedList';
import DoublyLinkedList from "./structures/DoublyLinkedList";
import Stack from "./structures/Stack";
import Queue from "./structures/Queue";
import BinarySearchTree from "./structures/BinarySearchTree";
import Graph from "./structures/Graph";

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('E', 'C');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('F', 'E');

console.log(graph);
console.log(graph.DFSRecursive('A'));
console.log(graph.DFSIterative('A'));
console.log(graph.BFS('A'));


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
