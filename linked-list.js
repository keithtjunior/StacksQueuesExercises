/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if(!this.head){
      this.push(val);
    }else{
      let prevHeadNode = this.head;
      this.head = newNode;
      this.head.next = prevHeadNode;
      this.length++;
    }
    
  }

  /** pop(): return & remove last item. */

  pop() {
    if(!this.tail) return null;
    let currentNode = this.head;
    while (currentNode) {
      if(!currentNode.next){
        this.head = null;
        this.tail = null;
        this.length--;
        return currentNode.val;
      }
      if(currentNode.next === this.tail){
        let prevTailNode = this.tail;
        this.tail = currentNode;
        this.tail.next = null;
        this.length--;
        return prevTailNode.val;
      }
      currentNode = currentNode.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if(!this.head) return null;
    let currentNode = this.head;
    if(currentNode.next) this.head = currentNode.next;
    else { this.head = null; this.tail = null; }
    this.length--;
    return currentNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(this.length === 0 || idx < 0) return null;
    let currentIdx = 0;
    let currentNode = this.head
    while(currentNode){
      if(currentIdx === idx) return currentNode.val;
      currentNode = currentNode.next;
      currentIdx++;
    }
    return null;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(this.length === 0 || idx < 0) return;
    let currentIdx = 0;
    let currentNode = this.head
    while(currentNode){
      if(currentIdx === idx){
        currentNode.val = val;
        return;
      } 
      currentNode = currentNode.next;
      currentIdx++;
    }
    return;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx < 0) return;
    let currentIdx = 1;
    let currentNode = this.head
    let newNode = new Node(val);
    if(!currentNode){ this.push(val); return; }
    if(idx === this.length){ this.push(val); return; }
    while(currentNode){
      if(idx === 0){
        let prevHeadNode = currentNode;
        newNode.next = prevHeadNode;
        this.head = newNode;
        this.length++;
        return;
      }
      if(idx === currentIdx){
        let prevNextNode = currentNode.next;
        newNode.next = prevNextNode;
        currentNode.next = newNode;
        this.length++;
        return;
      }
      currentNode = currentNode.next;
      currentIdx++;
    }
    return;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx < 0 || this.length === 0) return null;
    let currentIdx = 1;
    let currentNode = this.head
    if(!currentNode.next){ this.pop(); return; }
    while(currentNode){
      if(idx === 0){
        this.head = currentNode.next;
        this.length--;
        return currentNode.val;
      }
      if(idx === currentIdx && idx < this.length){
        let prevNextNode = currentNode.next;
        currentNode.next = prevNextNode.next;
        this.length--;
        return prevNextNode.val;
      }
      currentNode = currentNode.next;
      currentIdx++;
    }
    return null;
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0) return 0;
    let total = 0; let count = 0;
    let currentNode = this.head;
    while(currentNode){
      if(typeof currentNode.val === 'number'){
        total += currentNode.val;
        count++;
      }
      currentNode = currentNode.next;
    }
    return count != 0 ? (total/count) : 0;
  }

  /** print(): prints LinkedList nodes and length to console */

  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current);
      current = current.next;
    }
    console.log(`<Length: ${this.length}>`)
  }

}

module.exports = LinkedList;