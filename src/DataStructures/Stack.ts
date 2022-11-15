import {SNode} from '../types/node';

class Stack<T> {
  public length: number;
  private head?: SNode<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const newNode = {value: item} as SNode<T>;
    this.length++;

    if (!this.head) {
      this.head = newNode;
      return;
    }

    newNode.prev = this.head;
    this.head = newNode;
  }

  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1);

    if (this.length === 0) {
      const head = this.head;
      this.head = undefined;

      return head?.value;
    }
    const head = this.head as SNode<T>;
    this.head = head.prev;
    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

const stack = new Stack();
stack.push(4);
stack.push(5);
stack.push(6);
stack.pop();

console.log(stack.peek());
