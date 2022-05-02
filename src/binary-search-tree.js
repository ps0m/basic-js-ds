const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
   constructor (data) {
      this.data = data;
      this.left = null;
      this.right = null;
   }
}

class BinarySearchTree {
   constructor () {
      this.rootTree = null;
   }
  root() {
      return this.rootTree;
  }

  add(data) {
      this.rootTree = addNode(this.rootTree, data);
      
      function addNode(node, data) {
         if (!node) {
            return new Node(data);
         }
         if (node.data === data) {
            return node;
         }
         if (node.data > data) {
            if (!node.left) {
               node.left = new Node(data);
               return node;
            } else {
               node.left = addNode(node.left, data);
               return node;
            }
         }
         if (node.data < data) {
            if (!node.right) {
               node.right = new Node(data);
               return node;
            } else {
               node.right = addNode(node.right, data);
               return node;
            }
         }
      }
}

  has(data) {
      return hasNode(this.rootTree, data);

      function hasNode(node, data) {
         if (node.data === data) {
            return true;
         }
         if (node.data > data) {
            if (node.left) {
               return hasNode(node.left, data);
            } else return false;
         }   
         if (node.data < data) {
            if (node.right) {
               return hasNode(node.right, data);
            } else return false;
         }
      }
  }

  find(data) {
      return findNode(this.rootTree, data);

      function findNode(node, data) {
         if (node.data === data) {
            return node;
         }
         if (node.data > data) {
            if (node.left) {
               return findNode(node.left, data);
            } else return null;
         }   
         if (node.data < data) {
            if (node.right) {
               return findNode(node.right, data);
            } else return null;
         }
      }
  }

  remove(data) {
     if (!this.find(data)) {
        return;
     } 
      let currentNode = this.find(data);
      let parentNode= findParentNode(this.rootTree, data);
      // console.log(parentNode);
     
      // Вариант 1 Родитель +, Потомки 0
     if (!currentNode.left && !currentNode.right) {
        parentNode[0][parentNode[1]] = null;
      //   console.log(parentNode[0]); 
     }
      // Вариант 2 Родитель +, Потомки 1
      if (!currentNode.left && currentNode.right) {
         parentNode[0][parentNode[1]] = currentNode.right;
     }
     if (currentNode.left && !currentNode.right) {
         parentNode[0][parentNode[1]] = currentNode.left;
     }
     // Вариант 3 Родитель +, Потомки 2
     if (currentNode.left && currentNode.right) {
        let maxChild = this.max(currentNode.left);
        let parentMaxChild = findParentNode(currentNode, maxChild);
        console.log(currentNode, maxChild, parentMaxChild);
        if (parentMaxChild[0]) {
           parentMaxChild[0][parentMaxChild[1]] = null;
        }
        currentNode.data = maxChild;
        console.log(maxChild, parentMaxChild);
     }


      function findParentNode(node, data) {
         if (node.data === data) {
            console.log('ya tut');
            return [null, 'null'];
         }
         if (node.left) {
            if (node.left.data === data) {
               return [node, 'left'];
            }
         } 
         if (node.right) {
            if (node.right.data === data) {
               return [node, 'right'];
            }
         }
         if (node.left) {
            if (node.data > data) {
               return findParentNode(node.left, data);
            }
         }   
         if (node.right) {
            if (node.data < data) {
               return findParentNode(node.right, data);
            }
         }

      }
     



  }

  min(a = this.rootTree) {
     if (!this.rootTree.left && !this.rootTree.right) {
        return null;
     }
     let currentRoot;
     if (typeof a === 'number') {
        currentRoot = this.find(a); 
     } else currentRoot = a;
     
      return findMin(currentRoot);

      function findMin(node) {
         if (node.left) {
            return findMin(node.left);
         } else return node.data;
      }
  }

  max(a = this.rootTree) {
      if (!this.rootTree.left && !this.rootTree.right) {
        return null;
      }
     let currentRoot;
     if (typeof a === 'number') {
        currentRoot = this.find(a); 
     } else currentRoot = a;
     
      return findMax(currentRoot);

      function findMax(node) {
         if (node.right) {
            return findMax(node.right);
         } else return node.data;
      }
  }
}

module.exports = {
  BinarySearchTree
};