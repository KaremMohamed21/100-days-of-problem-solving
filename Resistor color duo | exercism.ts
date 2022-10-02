// Problem Solutions
export function decodedValue(value: [string, string]) {
  // analyze the string 
  let firstColor: string = value[0],
    secondColor: string = value[1];  
  // create an object with the values
  const colorValues: {[key: string]: number} = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  }
  // return the color values from the object
  return parseInt(`${colorValues[firstColor]}${colorValues[secondColor]}`);
}
