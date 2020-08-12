import SinglyLinkedList from './structures/SinglyLinkedList';
import DoublyLinkedList from "./structures/DoublyLinkedList";

const list = new DoublyLinkedList();

list.push('PRIVET');
list.push(' MY ');
list.push('NIGGER');
list.push('!!!');
list.traverse();
console.log(list);
// console.log(list.remove(2));

// console.log(list.unshift('PRIVET1'));;
// console.log(list.unshift(' MY1 '));;
// console.log(list.unshift('NIGGER1'));;
list.traverse();
list.reverse();

// console.log(list.set(-1, 'TEST'));
// console.log(list.set(0, 'TEST0'));
// console.log(list.set(2, 'TEST2'));
// console.log(list.insert(15, 'TEST'));



// console.log(list.shift());
// list.traverse();
// console.log(list.shift());
// list.traverse();
// console.log(list.shift());
list.traverse();
// console.log(list.shift());
console.log(list);
