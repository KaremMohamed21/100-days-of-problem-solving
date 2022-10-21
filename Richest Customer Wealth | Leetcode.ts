// loop over the customers i
// in each customer get the sum of his bank account
// and save the sum in variable
// compare that variable with each client
// and record the richest
function maximumWealth(accounts: number[][]): number {
    let sum: number = 0;
    accounts.forEach(client => {
        let clientSum = client.reduce((pre, current) => pre + current);
        if (clientSum > sum) sum = clientSum;
    });
    return sum;
};
