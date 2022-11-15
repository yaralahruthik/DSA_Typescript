export type QNode<T> = {
  value: T;
  next?: QNode<T>;
};

export type SNode<T> = {
  value: T;
  prev?: SNode<T>;
};
