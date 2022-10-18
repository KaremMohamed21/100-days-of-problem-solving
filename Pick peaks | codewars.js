function pickPeaks(arr){
  let final = {pos: [], peaks: []};
  
  if (arr.length > 2) {
    let upMovement = -1;
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]) {
        upMovement = i;
      } else if (arr[i] < arr[i - 1] && upMovement != -1) {
        final.pos.push(upMovement);
        final.peaks.push(arr[upMovement]);
        upMovement = -1
      }
    }
  }
  
  return final;
}


 p                i
  [3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]
