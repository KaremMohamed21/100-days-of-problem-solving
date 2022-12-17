// get copy of the array
// sort the array according to heights
// loop through the array and check every postion in both arrays
// add one to the checker if the values don't match
function heightChecker(heights: number[]): number {
    const original = [...heights];
    heights.sort((a , b) => a - b);
    let checker: number = 0;
    for (let i = 0; i < heights.length; i++) {
        if (original[i] != heights[i]) {
            checker++;
            
        }
    }

    return checker;
};
