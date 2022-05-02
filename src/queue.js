const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
   constructor () {
      this.start = null;
      this.end = null;

   }
  getUnderlyingList() {
      return this.start;
  }

  enqueue(data) {
      if (!this.start) {
         this.start = new ListNode(data);
         this.end = this.start;
      }
      else { 
         this.end.next = new ListNode(data);
         this.end = this.end.next;
      }
      
  }

  dequeue() {
      let firstElement = this.start.value;
      this.start = this.start.next;
      return firstElement;
  }
}

module.exports = {
  Queue
};
