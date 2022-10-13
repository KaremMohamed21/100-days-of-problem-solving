// Problem Solution
function humanReadable(input) {
  let reformat = (number) => parseInt(number).toLocaleString(undefined, {minimumIntegerDigits: 2});
  return `${reformat(input / 3600)}:${reformat((input % 3600) / 60)}:${reformat(input % 60)}`
}

// Solution Link: https://www.codewars.com/kata/reviews/52685f7482004e774f0001fa/groups/634819a77b911e0001bcba0f
