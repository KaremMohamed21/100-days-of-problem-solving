// create variable to hold the number and counter
// while that variable is not zero
// devide by 2 if even
// subtract by one if odd
// increase the steps counter
function numberOfSteps(num: number): number {
    let value: number = num,
        steps: number = 0;
    while (value !== 0) {
        if (value % 2 === 0) {
            value = value / 2
        } else {
            value = value - 1;
        }
        steps++;
    }
    return steps
};
