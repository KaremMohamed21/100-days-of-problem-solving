// Problem Solution
function findNumbers(nums: number[]): number {
    let counter = 0;
    for (let el of nums) {
        if (el.toString().length % 2 === 0) counter++;
    }
    return counter;
};
