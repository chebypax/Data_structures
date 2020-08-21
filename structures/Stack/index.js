class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.last = newNode;
    } else {
      newNode.next = this.first;
    }
    this.first = newNode;
    this.size += 1;

    return this.size;
  }

  pop() {
    if (this.size === 0) {
      return undefined;
    }
    const deletedNode = this.first;
    this.first = deletedNode.next;
    deletedNode.next = null;
    this.size -= 1;

    if (this.size === 0) {
      this.last = null;
    }

    return deletedNode;
  }
}

export default Stack;
