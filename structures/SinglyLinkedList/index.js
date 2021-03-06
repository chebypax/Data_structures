class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length += 1;

    return this;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length += 1;

    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let current = this.head;
    let newTail = this.head;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    let oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }

    return oldHead;
  }

  get(index) {
    if (isNaN(index) || index < 0 || index >= this.length) {
      return undefined;
    }

    let current = this.head;
    let i = 0;

    while (i < index) {
      current = current.next;
      i += 1;
    }

    return current;

  }

  set(index, val) {
    const node = this.get(index);
    if (node === undefined) {
      return false;
    }
    node.val = val;

    return true;
  }

  insert(index, val) {
    if (isNaN(index) || index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return !!this.unshift(val);
    }
    if (index === this.length) {
      return !!this.push(val);
    }

    const prevNode = this.get(index - 1);
    const newNode = new Node(val);
    this.length += 1;

    newNode.next = prevNode.next;
    prevNode.next = newNode;

    return true;

  }

  remove(index) {
    if (isNaN(index) || index < 0 || index > this.length - 1) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }

    const prevNode = this.get(index - 1);
    const deletedNode = prevNode.next;

    prevNode.next = deletedNode.next;
    deletedNode.next = null;
    this.length -= 1;

    return deletedNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  traverse() {
    let current = this.head;
    const arr = [this.length];
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

export default SinglyLinkedList;
