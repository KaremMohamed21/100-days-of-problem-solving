export function find(haystack: number[], needle: number): number | Error {
  let left = 0,
      right = haystack.length - 1,
      middle = Math.floor((left + right) / 2);

  while (left <= right && haystack[middle] !== needle) {
    if (needle < haystack[middle]) right = middle -1
    else left = middle + 1

    middle = Math.floor((left + right) / 2);
  }

  if (haystack[middle] === needle) return middle
  else throw new Error('Value not in array')
}
