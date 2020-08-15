class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.size += 1;

    return this.size;
  }

  dequeue() {
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

export default Queue;
