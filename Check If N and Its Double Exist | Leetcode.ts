// loop throw the array with i, make a nested array with j
// iterate and check if the condition acheived return true, if not return false at the end
function checkIfExist(arr: number[]): boolean {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == 2 * arr[j] && i != j) {
                return true;
            }
        }
    }
    return false;
};
