// Problem Solution
function breakingRecords(scores) {
    // Write your code here
    // Define the most, least, mostBreakTimes and leastBreakTimes
    let most = scores[0],
        least = scores[0],
        mostBreaks = 0,
        leastBreaks = 0;
    // map throw the array of scores and iterate
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > most) {
            mostBreaks++;
            most = scores[i]
        }
        if (scores[i] < least) {
            leastBreaks++;
            least = scores[i]
        }
    }
    // check with each iteration the parameters above
    return [mostBreaks, leastBreaks];
}
