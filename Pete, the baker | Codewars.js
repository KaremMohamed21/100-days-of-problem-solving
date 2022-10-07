// Problem Solution
// Define variable minimal count
// loop throw the keys of recipes object
// Check if the ingredient available, if it isn't return 0
// compare the amount made of the current ingredient to the minial count made
// if there isn't minimal count or amountMade < minimalCount, then minimalCount = amountMade

function cakes(recipe, available) {
  let minimalCount = Infinity; 
  for (let key in recipe) {
    if (!available[key]) return 0;
    let amountMade = Math.floor(available[key] / recipe[key]);  
    if (amountMade < minimalCount) minimalCount = amountMade;
  }
  
  return minimalCount;
}
