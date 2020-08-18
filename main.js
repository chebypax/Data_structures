import HashTable from './structures/HashTable';
import PriorityQueue from './structures/PriorityQueue';
import MaxBinaryHeap from './structures/MaxBinaryHeap';
import SinglyLinkedList from './structures/SinglyLinkedList';
import DoublyLinkedList from "./structures/DoublyLinkedList";
import Stack from "./structures/Stack";
import Queue from "./structures/Queue";
import BinarySearchTree from "./structures/BinarySearchTree";

const hashTable = new HashTable();

hashTable.set('pink', 'pink1');
hashTable.set('pink', 'pink3');
hashTable.set('blue', 'blue1');
hashTable.set('grey', 'grey1');
hashTable.set('white', 'white1');
hashTable.set('red', 'red1');
hashTable.set('green', 'green1');

console.log(hashTable);
console.log(hashTable.get('red'));
console.log(hashTable.get('pink312'));
console.log(hashTable.keys());
console.log(hashTable.values());


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
