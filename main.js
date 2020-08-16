import SinglyLinkedList from './structures/SinglyLinkedList';
import DoublyLinkedList from "./structures/DoublyLinkedList";
import Stack from "./structures/Stack";
import Queue from "./structures/Queue";
import BinarySearchTree from "./structures/BinarySearchTree";


const bst = new BinarySearchTree();

console.log(bst.insert(15));
console.log(bst.insert(9));
console.log(bst.insert(22));
console.log(bst.insert(6));
console.log(bst.insert(7));
console.log(bst.insert(17));
console.log(bst.insert(27));
console.log(bst.insert(16));
console.log(bst.insert(19));
console.log(bst.insert(14));

// console.log('here');

console.log(bst.depthFirstSearchInOrder());
//            15
//       9        22
//     6  14    17  27
//      7     16 19
