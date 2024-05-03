function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > currentValue) {
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = currentValue;
      }
      return arr;
}

let arr = []
let arr2 = [2]
let arr3 = [20,-5]
let arr4 = [20,-5,-10,3,0,5,15,-2]

console.log(insertionSort(arr))
console.log(insertionSort(arr2))
console.log(insertionSort(arr3))
console.log(insertionSort(arr4))