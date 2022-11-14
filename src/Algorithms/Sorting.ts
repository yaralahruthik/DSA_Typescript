// Bubble Sort
const bubbleSort = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
      }
    }
  }
};

const swap = (i: number, j: number, arr: number[]): void => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

export default {
  bubbleSort,
};

const arr = [3, 2, 6];
bubbleSort(arr);
console.log(arr);
