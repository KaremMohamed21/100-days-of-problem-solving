// Problem Solution
/**
 Do not return anything, modify nums1 in-place instead.
 */
// splice element from the index of m till n
// merge the two arrays 
// sort em
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    nums1.splice(m, n);
    nums1.push(...nums2);
    nums1 = nums1.sort((a, b) => a - b);
};
