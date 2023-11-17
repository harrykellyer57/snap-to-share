/* 
Filename: ComplexCode.js
Content: Complex code demonstrating various algorithms and data structures
*/

// AVL Tree implementation
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  // Calculate height of a node
  getHeight(node) {
    if (node === null) return 0;
    return node.height;
  }

  // Calculate the balance factor of a node
  getBalanceFactor(node) {
    if (node === null) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Update height of a node
  updateHeight(node) {
    if (node === null) return;
    node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  // Right rotate a subtree rooted with node x
  rotateRight(x) {
    const y = x.left;
    const T2 = y.right;

    y.right = x;
    x.left = T2;

    this.updateHeight(x);
    this.updateHeight(y);

    return y;
  }

  // Left rotate a subtree rooted with node y
  rotateLeft(y) {
    const x = y.right;
    const T2 = x.left;

    x.left = y;
    y.right = T2;

    this.updateHeight(y);
    this.updateHeight(x);

    return x;
  }

  // Insert a value into the balanced AVL Tree
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }

    this.root = this._insertNode(this.root, value);
  }

  _insertNode(node, value) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this._insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this._insertNode(node.right, value);
    } else {
      return node;
    }

    this.updateHeight(node);

    const balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor > 1 && value < node.left.value) {
      return this.rotateRight(node);
    }

    if (balanceFactor < -1 && value > node.right.value) {
      return this.rotateLeft(node);
    }

    if (balanceFactor > 1 && value > node.left.value) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    if (balanceFactor < -1 && value < node.right.value) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }
  // ... (more methods and advanced algorithms)
}

// Usage example
const avlTree = new AVLTree();
avlTree.insert(8);
avlTree.insert(3);
avlTree.insert(10);
avlTree.insert(1);
avlTree.insert(6);
avlTree.insert(9);
avlTree.insert(14);
avlTree.insert(13);
avlTree.insert(7);

console.log(avlTree);