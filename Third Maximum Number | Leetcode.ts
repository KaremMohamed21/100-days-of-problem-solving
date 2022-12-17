// Sort the array in descending order and loop the array 
// check if the element is the third maximum distinct
function thirdMax(nums: number[]): number {
    if (nums.length < 3) {
        return Math.max(...nums);
    }

    nums.sort((a, b) => b - a);
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) count++;
        if (count === 3) return nums[i];
    }

    return Math.max(...nums);
};
