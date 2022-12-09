function replaceElements(arr: number[]): number[] {
    let greatFromRight = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        arr[i] = greatFromRight;
        greatFromRight = Math.max(greatFromRight, temp);
    }

    return arr;
}
