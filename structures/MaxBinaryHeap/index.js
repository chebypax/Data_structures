class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);

    const bubbleUp = (index) => {
      const parentIndex = Math.floor((index - 1) / 2);
      if (index > 0 && this.values[parentIndex] < value) {
        this.values[index] = this.values[parentIndex];
        this.values[parentIndex] = value;
        bubbleUp(parentIndex);
      }

      return true;
    }

    const index = this.values.length - 1;
    bubbleUp(index);

    return this;
  }

  extractMax() {
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

      let maxIndex = leftChildIndex;
      if (rightChildIndex < this.values.length && this.values[rightChildIndex] > this.values[leftChildIndex]) {
        maxIndex = rightChildIndex;
      }
      if (this.values[index] > this.values[maxIndex]) {
        return true;
      }
      const tmp = this.values[maxIndex];
      this.values[maxIndex] = this.values[index];
      this.values[index] = tmp;

      sinkDown(maxIndex);
    }

    sinkDown(0);

    return maxItem;
  }
}

export default MaxBinaryHeap;
