import Node from './Node';

export default class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  unshift(data) {
    const addNode = new Node(data);
    const currentHeadNode = this.head

    if(currentHeadNode) {
      addNode.next = currentHeadNode;
    }
    this.head = addNode;
    this.length++;
  }

  shift() {
    if(!this.head) {
      return null;
    } else {
      const removeNode = this.head;
      const nextHeadNode = removeNode.next;

      this.head = nextHeadNode;
      return removeNode;
    }
  }

  push(data) {
    const addNode = new Node(data)

    this.length++;
    if(!this.head) {
      this.head = addNode
    } else {
      let lastNode = this.head

      while(lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = addNode;
    }
  }

  pop() {
    if(!this.head) {
      return null;
    } else {
      let lastNode = this.head;
      
      if(this.length >= 2) {
        let secondToLast = this.head;
        let counter = 0;
        const twoFromEnd = 2;

        while(this.length > counter + twoFromEnd) {
          secondToLast = secondToLast.next;
          counter++;
        }
        lastNode = secondToLast.next;
        secondToLast.next = null;
      }

      this.length--;
      if(this.length === 0) {
        this.head = null;
      }

      return lastNode;
    }
  }



}
