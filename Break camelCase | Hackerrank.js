// split the string into array
// map throw each element and check
// if it's upper case, add space before it
// then return the string joined
function solution(string) {
  string = string.split('').map((char) => {
    if (char === char.toUpperCase()) {
      char = ' ' + char
    }
    return char
  })
  return string.join('')
}
