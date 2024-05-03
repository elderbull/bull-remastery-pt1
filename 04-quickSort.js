let quickSort = arr => {
    if (arr.length < 2) return arr;
   
    // Pick a value in the array to serve as the pivot
    let p = arr[0]
   
    // Partition the array so that values smaller than the pivot are on the left and values larger than the pivot are on the right
    let left = [];
    let right = [];
   
   for (let i = 1; i<arr.length; i++ ) {
   // Sort the left and the right partitions
   
        if (arr[i] < p) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    
   // Return an array with left, pivot, and right values
    return [...quickSort(left), p, ...quickSort(right)]
}

let arr = []
let arr2 = [2]
let arr3 = [20,-5]
let arr4 = [20,-5,-10,3,0,5,15,-2]

console.log(quickSort(arr))
console.log(quickSort(arr2))
console.log(quickSort(arr3))
console.log(quickSort(arr4))