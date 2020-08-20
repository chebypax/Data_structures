class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

// Behavior is similar to Min Binary Heap
class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);

    const bubbleUp = (index) => {
      const parentIndex = Math.floor((index - 1) / 2);
      if (index > 0 && this.values[parentIndex].priority > newNode.priority) {
        this.values[index] = this.values[parentIndex];
        this.values[parentIndex] = newNode;
        bubbleUp(parentIndex);
      }

      return true;
    };

    const index = this.values.length - 1;
    bubbleUp(index);

    return this;
  }

  dequeue() {
    const maxItem = this.values[0];
    if (this.values.length === 1) {
      this.values.pop();
    } else {
      this.values[0] = this.values.pop();
    }

    const sinkDown = (index) => {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;

      if (leftChildIndex >= this.values.length) {
        return true;
      }

      let minIndex = leftChildIndex;
      if (rightChildIndex < this.values.length
        && this.values[rightChildIndex].priority < this.values[leftChildIndex].priority) {
        minIndex = rightChildIndex;
      }
      if (this.values[index].priority < this.values[minIndex].priority) {
        return true;
      }
      const tmp = this.values[minIndex];
      this.values[minIndex] = this.values[index];
      this.values[index] = tmp;

      sinkDown(minIndex);
    };

    sinkDown(0);

    return maxItem;
  }
}

export default PriorityQueue;
