let selectionSort = arr => {
    if (!arr.length) return "Array is empty!"
    if(arr.length <= 1) return arr;


    for (let i = 0; i < arr.length; i++) {
        let lowest = i

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j
            }
        }

        if (lowest !== i) {
            [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
        }
    }
    return arr;
}

let arr = []
  let arr2 = [2]
  let arr3 = [20,-5]
  let arr4 = [20,-5,-10,3,0,5,15,-2]

  console.log(selectionSort(arr))
  console.log(selectionSort(arr2))
  console.log(selectionSort(arr3))
  console.log(selectionSort(arr4))