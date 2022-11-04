// Problem Solutions
// Define a Consecutive counter
// loop throw the array, if the item = 1, increase the counter, if not reset the counter
// record the largest consecutive
function findMaxConsecutiveOnes(nums: number[]): number {
    let counter = 0,
        large = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            counter++;
        } else {
            counter = 0
        }
        
        if (counter > large) {
            large = counter;
        } 

    }
    
    return large;
};
