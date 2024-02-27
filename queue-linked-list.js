const LinkedList = require('./linked-list');

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
    this.size = 0;
    this.first = null;
    this.last = null;
    this._list = new LinkedList();
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this._list.push(val);
    this.size = this._list.length;
    this.first = this._list.head;
    this.last = this._list.tail;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(this._list.length === 0){
      throw new Error('Queue is empty');
    }
    let val = this._list.shift();
    this.size = this._list.length;
    this.first = this._list.head;
    this.last = this._list.tail;
    return val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this._list.head.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this._list.length < 1;
  }
}

module.exports = Queue;
