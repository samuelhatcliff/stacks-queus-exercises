/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val)
    if (!this.last) {
      this.last = newNode;
      this.first = newNode;
      this.size++;
      return undefined;
    }
    this.last.next = newNode;
    this.size++;
    return undefined
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0) throw 'Queue is empty.'
    const secondNode = this.first.next;
    const firstNode = this.first;
    this.first = secondNode;
    this.size--;
    return firstNode;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size === 0) throw 'Queue is empty.'
    return this.first;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    this.size === 0 ? true : false;
  }
}

module.exports = Queue;
