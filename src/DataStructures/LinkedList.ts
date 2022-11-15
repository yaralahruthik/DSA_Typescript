interface Node {
  value: unknown;
  next: Node | null;
}

class LinkedList {
  head: Node;
  tail: Node;
  length: number;

  constructor(value: unknown) {
    this.head = {
      value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value: unknown) {
    const newNode = {value, next: null};

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value: unknown) {
    const newNode: Node = {value, next: null};

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  insertAt(index: number, value: unknown) {
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.length - 1) {
      this.append(value);
    } else {
      const newNode: Node = {value, next: null};
      const nodeToInsertAt = this.getNodeAt(index);
      newNode.next = nodeToInsertAt!.next;
      nodeToInsertAt!.next = newNode;
      this.length++;
    }

    return this;
  }

  getNodeAt(index: number) {
    let counter = 0;
    let curNode = this.head;

    if (index > this.length || index < 0) {
      return null;
    }

    while (counter !== index) {
      curNode = curNode.next!;
      counter++;
    }

    return curNode;
  }

  remove(index: number) {
    if (index === 0 && this.length === 2) {
      this.head = this.head.next!;
      this.tail = this.head;
    } else if (index === 0) {
      this.head = this.head.next!;
    } else {
      const prevNodeToRemoveNode = this.getNodeAt(index - 1);
      const nodeToRemove = prevNodeToRemoveNode!.next;
      prevNodeToRemoveNode!.next = nodeToRemove!.next;

      if (this.tail === nodeToRemove) {
        this.tail = prevNodeToRemoveNode!;
      }
    }

    this.length--;

    return this;
  }

  printList() {
    const array = [];
    let currentNode: Node | null = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insertAt(2, 99);
console.log(myLinkedList.printList());
