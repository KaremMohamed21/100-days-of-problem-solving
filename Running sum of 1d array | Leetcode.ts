// Problem Solution
function runningSum(nums: number[]): number[] {
    let final: number[] = [];
    
    for (let i = 0; i < nums.length; i++) {
        let sum: number = 0;
        for (let j = i; j >= 0; j--) {
            sum += nums[j]
        }
        final.push(sum);
    }

    return final;
};

// Better solution
function runningSum(nums: number[]): number[] {
   let final : number[] = []
   let sum = 0
    for (let n of nums){
       sum += n
       final.push(sum)
     }
     return final
}
