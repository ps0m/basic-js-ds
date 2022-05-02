const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
class LinkedList {
   constructor(x) {
      this.head = null;
      this.length = 0;
   }
   add(a) {
      if (this.length === 0) {
         this.head = new ListNode(a);
      } else {
         let current = this.head;

         while(current.next) {
            current = current.next;
         }

         current.next = new ListNode(a);
      }
      this.length++;
   }

   remove(b) {
      let current = this.head;
      let previous = null;
      
      while (current) {
         if (current.value === b) {
            if (!previous) {
               this.head = current.next;
               previous = null;
            } else {
               while (current.next && current.next.value === 3 ) {
                  current = current.next;
                  this.length--;
               }
               previous.next = current.next;
               previous = current;
            }
            current = current.next;
            this.length--;

         } else {
            previous = current;
            current = current.next;
         }
         
      }
   }

   print() {
      let current = this.head;

      while (current) {
         console.log(current);
         current = current.next;
      }
      console.log(this.length);

   }
}



function removeKFromList(l, k) {
      let result = l;
      let current = result;
      let previous = null;
      
      while (current) {
         if (current.value === k) {
            if (!previous) {
               current = current.next;
               result = result.next;
               previous = null;
            } else {
               while (current.next && current.next.value === k ) {
                  current = current.next;
               }
               previous.next = current.next;
               previous = current;
            }
            current = current.next;

         } else {
            previous = current;
            current = current.next;
         }
         
      }


   return result;
}


module.exports = {
  removeKFromList
};
