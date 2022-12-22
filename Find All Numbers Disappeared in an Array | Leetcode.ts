// loop based on the array and get the missed number from the array
function findDisappearedNumbers(nums: number[]): number[] {
    let final = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            final.push(i);
        }
    }

    return final;
};
