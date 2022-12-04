function validMountainArray(arr: number[]): boolean {
    if (arr.length < 3) return false;
    
    let up = 0;
    let down = arr.length - 1;
    
    while (arr[up] < arr[up + 1]) {
        up++;
    }
    
    while (arr[down] < arr[down - 1]) {
        down--;
    }
    
    return up > 0 && up === down && down < arr.length - 1;
};
