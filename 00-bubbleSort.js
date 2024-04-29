function bubbleSort(arr) {
  if (!arr.length) return "Array is empty!"
  if(arr.length <= 1) return arr;
  
  let swapped = false;
    // Iterate through the array
    for (let i =0; i<arr.length; i++) {
      // If the current value is greater than its neighbor to the right
      if (arr[i] > arr[i+1]) {
       
        // Swap those values
        // console.log("pre: " + arr[i])
        // console.log("pre: " + arr[i+1])
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        // console.log("post: " + arr[i])
        // console.log("post: " + arr[i+1])
        swapped = true;
      }  
      
      console.log(arr.join(","));
    }
    
      // If you get to the end of the array and no swaps have occurred, return
      if(!swapped) {
        return arr
      } else {
      // Otherwise, repeat from the beginning
        return bubbleSort(arr)
      }
  }
  
  let arr = []
  let arr2 = [2]
  let arr3 = [20,-5]
  let arr4 = [20,-5,-10,3,0,5,15,-2]

  // console.log(bubbleSort(arr))
  // console.log(bubbleSort(arr2))
  // console.log(bubbleSort(arr3))
  console.log(bubbleSort(arr4))