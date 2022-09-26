// Problem Desription
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Problem Solution
// Remove all the non-alphanumeric chars and make it lower case
// compare the reversed version to the original
function isPalindrome(s: string): boolean {
    const cleanedVersion: string = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    return cleanedVersion === cleanedVersion.split('').reverse().join('');
};
