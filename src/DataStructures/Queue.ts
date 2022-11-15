import {QNode} from '../types/node';

class Queue<T> {
  public length: number;
  private head?: QNode<T>;
  private tail?: QNode<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const newNode = {value: item} as QNode<T>;

    this.length++;

    if (!this.tail) {
      this.tail = this.head = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  dequeue(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this.length--;

    const head = this.head;
    this.head = this.head.next;

    if (this.length === 0) {
      this.tail = undefined;
    }

    // Not needed to do manually do this, garbage collection
    head.next = undefined;

    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

const queue = new Queue();

queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);

queue.dequeue();

console.log(queue.peek());
