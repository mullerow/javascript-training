Codewars Kata: https://www.codewars.com/kata/5a0178f66f793bc5b0001728

Name: longest palindrome

Solution:

function longestPalindrome(str) {
let count = 0;
str = str.toLowerCase();
const result = str.match(/[a-z0-9]/g);
str = str.split("");
const amount = result.reduce(digit, {});

function digit(acc, char) {
acc[char] = (acc[char] || 0) + 1;
return acc;
}
for (let elem in amount) {
count += Math.floor(amount[elem] / 2);
}
if (result.length > count _ 2) {
count = 2 _ count + 1;
} else count \*= 2;
return count;
}
