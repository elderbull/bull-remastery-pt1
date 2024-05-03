let mergeSort = arr => {
let copy = [...arr];
// 1. Check if the input is length 1 or less.
// 2. If so, it's already sorted: return.
if (copy.length < 2) return arr;

// 3. Divide the array in half.
let half = copy.length / 2;
let left = copy.splice(0,half);

// 4. Recursively sort the left half.
// 5. Recursively sort the right half.
// 6. Merge the halves together and return.
return merge(mergeSort(left), mergeSort(copy))

}

function merge(arrA, arrB) {
// 1. Create an empty return array.
let res = []
// 2. Point to the first value of each array.
// 3. While there are still values in each array:
while (arrA.length && arrB.length) {
// 4. Compare the first values of each array.
// 5. Add the smaller value to the return array.
// 6. Move the pointer to the next value in that array.
if (arrA[0] < arrB[0]) {
    res.push(arrA.shift())
} else {
    res.push(arrB.shift())
}
    }
// 7. Return the return array.
    return [...res, ...arrA, ...arrB];
}

let arr = []
let arr2 = [2]
let arr3 = [20,-5]
let arr4 = [20,-5,-10,3,0,5,15,-2]

console.log(mergeSort(arr))
console.log(mergeSort(arr2))
console.log(mergeSort(arr3))
console.log(mergeSort(arr4))