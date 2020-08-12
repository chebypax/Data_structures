class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length += 1;

    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    const deletedNode = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = deletedNode.prev;
      this.tail.next = null;
      deletedNode.prev = null;
    }
    this.length -= 1;

    return deletedNode;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;

    return this;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }

    const deletedNode = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = deletedNode.next;
      this.head.prev = null;
      deletedNode.next = null;
    }
    this.length -= 1;

    return deletedNode;
  }

  get(index) {
    if (isNaN(index) || index < 0 || index >= this.length) {
      return undefined;
    }

    let current;
    let i;

    if (index < this.length / 2) {
      current = this.head;
      i = 0;

      while (i < index) {
        current = current.next;
        i += 1;
      }
    } else {
      current = this.tail;
      i = this.length - 1;

      while (i > index) {
        current = current.prev;
        i -= 1;
      }
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
    const nextNode = prevNode.next;
    const newNode = new Node(val);
    this.length += 1;

    nextNode.prev = newNode;
    newNode.next = nextNode;
    prevNode.next = newNode;
    newNode.prev = prevNode;

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
    const nextNode = deletedNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    deletedNode.prev = null;
    deletedNode.next = null;
    this.length -= 1;

    return deletedNode;
  }

  reverse() {
    let node = this.tail;
    this.tail = this.head;
    this.head = node;
    for (let i = 0; i < this.length; i++) {
      const tmp = node.prev;
      node.prev = node.next;
      node.next = tmp;
      node = tmp;
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

export default DoublyLinkedList;
