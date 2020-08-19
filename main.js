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
graph.addVertex('Moscow');
graph.addVertex('Berlin');
graph.addVertex('Prague');
graph.addVertex('Moscow');
graph.addEdge('Bejing', 'Moscow');
graph.addEdge('Berlin', 'Moscow');
graph.addEdge('Prague', 'Moscow');
graph.addEdge('Berlin', 'Moscow');
// graph.removeEdge('Berlin', 'Moscow');
// graph.removeEdge('Berlin', 'Moscow1');
// graph.removeVertex('Moscow2');
graph.removeVertex('Moscow');
console.log(graph);


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
