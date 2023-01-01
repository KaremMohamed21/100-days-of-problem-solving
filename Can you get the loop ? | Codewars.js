// loop through the list
// get the replicant number
// loop from the ruplicant again and determine the length of the loop
function loop_size(node){
  let arr = [];
  let loopStarter;
  let current = node;
  while (current) {
    if (arr.includes(current)) {
      loopStarter = current;
      break;
    }
    arr.push(current)
    current = current.next;
  }
  
  const final = arr.slice(arr.indexOf(loopStarter)).length;
  
  return final;
}
