// Problem Solution
// make a for loop that loops over the array
// define a count in the loop as zero
// define inner loop that loops over the array
// if the count is over 1, replace the element with _, if not continue looping
// sort the array after it
// make sure to record the replacement time and subtract it from the length
let removeDuplicates = (nums) => {
    let count;

    for (let i = 0; i < nums.length; i++) {
        count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j] && count < 1) {
                count = 1
            } else if (nums[i] === nums[j] && count > 0) {
                nums.splice(j, 1);
                j--;
            }
        }
    }

    return nums.length
};
