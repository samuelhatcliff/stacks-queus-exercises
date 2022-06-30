/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    }
    this.last.next = newNode;
    this.last = newNode;
    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) throw 'Stack is empty.';
    const lastNode = this.last;
    let count = 1;
    let node = this.first
    while (count !== this.size - 1) {
      node = node.next
      count++;
    }
    this.last = node;
    this.size--;
    return lastNode
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.size === 0) {
      throw 'Stack is empty.'
    } else {
      return this.first;
    }
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    this.size === 0 ? true : false;
  }
}

module.exports = Stack;
