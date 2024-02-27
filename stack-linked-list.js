const LinkedList = require('./linked-list');

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
    this.size = 0;
    this.first = null;
    this.last = null;
    this._list = new LinkedList();
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    this._list.unshift(val);
    this.size = this._list.length;
    this.first = this._list.head;
    this.last = this._list.tail;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this._list.length === 0){
      throw new Error('Stack is empty');
    }
    let val = this._list.shift();
    this.size = this._list.length;
    this.first = this._list.head;
    this.last = this._list.tail;
    return val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this._list.head.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this._list.length < 1;
  }
}

module.exports = Stack;
