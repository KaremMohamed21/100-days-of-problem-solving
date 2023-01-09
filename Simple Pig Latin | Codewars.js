// split the sentence by space
// iterate through the array and splice the first element
// add the spliced element to the end and add ay to it
// join the array together
function pigIt(str){
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '!' || arr[i] === '?' || arr[i] === '.') {
      continue;
    }
    const sub = arr[i].substr(1);
    arr[i] = `${sub}${arr[i][0]}ay`;
  }
 
  return arr.join(' ');
}
