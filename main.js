import PriorityQueue from './structures/PriorityQueue';
import MaxBinaryHeap from './structures/MaxBinaryHeap';
import SinglyLinkedList from './structures/SinglyLinkedList';
import DoublyLinkedList from "./structures/DoublyLinkedList";
import Stack from "./structures/Stack";
import Queue from "./structures/Queue";
import BinarySearchTree from "./structures/BinarySearchTree";

const pq = new PriorityQueue();
pq.enqueue('v10', 10);
pq.enqueue('v4', 4);
pq.enqueue('v14', 14);
pq.enqueue('v3', 3);
pq.enqueue('v7', 7);
pq.enqueue('v1', 1);

console.log(pq);

console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq);

// const binaryHeap = new MaxBinaryHeap();
// binaryHeap.insert(100);
// binaryHeap.insert(90);
// binaryHeap.insert(80);
// binaryHeap.insert(95);
// binaryHeap.insert(70);
// binaryHeap.insert(110);
// binaryHeap.insert(60);
// console.log(binaryHeap);
//
// console.log(binaryHeap.extractMax());
// console.log(binaryHeap.extractMax());
// console.log(binaryHeap.extractMax());
// console.log(binaryHeap.extractMax());
// console.log(binaryHeap.extractMax());
// console.log(binaryHeap.extractMax());
// console.log(binaryHeap.extractMax());
// console.log(binaryHeap.extractMax());
// console.log(binaryHeap.extractMax());
// console.log(binaryHeap.extractMax());
// console.log(binaryHeap.extractMax());
// console.log(binaryHeap.extractMax());
// console.log(binaryHeap.extractMax());
// console.log(binaryHeap.extractMax());
//
// console.log(binaryHeap);


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
