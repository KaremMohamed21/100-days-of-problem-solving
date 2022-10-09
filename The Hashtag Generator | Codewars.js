// Problem Solution
// trim the input and check if it isn't white space
// replace the extra spaces
// split the input into array
// map throw the array make first letter of each word capital
// push hashtag to the first of the array, join the array
// if the string is longer than 140 chars return false
function generateHashtag (str) {
  let inputTrimed = str.trim();
  if (inputTrimed.length === 0 || inputTrimed === '') return false;
  
  inputTrimed = inputTrimed.replace(/\s+/g, ' ').split(' ');
  inputTrimed = inputTrimed.map((el) => el.charAt(0).toUpperCase() + el.slice(1));
  inputTrimed.unshift('#')
  inputTrimed = inputTrimed.join('')
  
  if (inputTrimed.length > 140) return false;
  
  return inputTrimed
}
