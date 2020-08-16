import Queue from "../Queue";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;

      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) {
        return undefined;
      }
      if (value > current.value) {
        if (null !== current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return this;
        }
      } else {
        if (null !== current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          return this;
        }
      }
    }
  }

  contains(value) {
    let current = this.root;

    while (current) {
      if (value === current.value) {
        return true;
      }
      if (value > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }

    return false;
  }

  // BFS and DFS (methods for tree traversal below) are universal and can be used for ALL trees,
  // NOT only for binary search tree

  breadthFirstSearch() {
    const data = [];
    const queue = new Queue();
    queue.enqueue(this.root);
    let current;

    while (queue.size > 0) {
      current = queue.dequeue();
      data.push(current.value.value);
      if (null !== current.value.left) {
        queue.enqueue(current.value.left);
      }
      if (null !== current.value.right) {
        queue.enqueue(current.value.right);
      }
    }

    return data;
  }

  depthFirstSearchPreOrder() {
    function traverse(node) {
      if (node === null) {
        return [];
      }
      let data = [node.value];
      if (null !== node.left) {
        data = data.concat(traverse(node.left));
      }
      if (null !== node.right) {
        data = data.concat(traverse(node.right))
      }

      return data;
    }

    return traverse(this.root);
  }

  depthFirstSearchPostOrder() {
    function traverse(node) {
      if (node === null) {
        return [];
      }
      let data = [];
      if (null !== node.left) {
        data = data.concat(traverse(node.left));
      }
      if (null !== node.right) {
        data = data.concat(traverse(node.right))
      }

      return data.concat([node.value]);

    }

    return traverse(this.root);
  }

  depthFirstSearchInOrder() {
    function traverse(node) {
      if (node === null) {
        return [];
      }
      let data = [];
      if (null !== node.left) {
        data = data.concat(traverse(node.left));
      }

      data = data.concat([node.value]);

      if (null !== node.right) {
        data = data.concat(traverse(node.right))
      }

      return data;

    }

    return traverse(this.root);
  }

}

export default BinarySearchTree;
