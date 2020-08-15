import SinglyLinkedList from './structures/SinglyLinkedList';
import DoublyLinkedList from "./structures/DoublyLinkedList";
import Stack from "./structures/Stack";
import Queue from "./structures/Queue";

const stack = new Queue();

console.log(stack.enqueue('first'));;
console.log(stack.enqueue('second'));;
console.log(stack.enqueue('third'));;

console.log(stack);

console.log(stack.dequeue());
console.log(stack.dequeue());
console.log(stack.dequeue());
console.log(stack.dequeue());

console.log(stack);
