// Problem Description

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// Problem Solution

// define the result
// Stringify the number
// map throw each char and squere it
// add it into result as string
// parse int the result

function squareDigits(num){
  let result = '';
  let strNumber = num.toString();
  
  for (let i of strNumber) {
    result = result + `${Math.pow(parseInt(i), 2)}`
  }
  
  return parseInt(result);
}
