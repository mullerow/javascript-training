CodeWars-kata: https://www.codewars.com/kata/54ff3102c1bad923760001f3

Name: Vowel Count

Solution:
```js
function getCount(str) {
let n = 0;
let dict = {
a: "a",
e: "e",
i: "i",
u: "u",
o: "o",
};
for (i = 0; i < str.length; i++) {
if (str[i] === dict[str[i]]) {
n++;
}
}
return n;
}
```
