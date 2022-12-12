// loop through the array from the end and splice each odd number and push it again
function sortArrayByParity(nums: number[]): number[] {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] % 2 !== 0) {
            let poped = nums.splice(i, 1)[0]
            nums.push(poped);
        }
    }

    return nums;
};
