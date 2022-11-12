/**
 Do not return anything, modify arr in-place instead.
 -- if the array doesn't include zeros return the array
 -- if it does add a zero next to the found zero and pop the last element
 -- continue looping till the finish of the array
 */
function duplicateZeros(arr: number[]): void {
    if (arr.includes(0)) {
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] === 0) {
              arr.splice(i, 0, 0)
              arr.pop()
              i++;
          }
      }
    }
};
