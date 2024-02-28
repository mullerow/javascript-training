Codewars-Kata: https://www.codewars.com/kata/54ba84be607a92aa900000f1

Kata: Isograms

Solution:
```js
function isIsogram(str) {
let dict = {};
str = str.toLowerCase();
for (i = 0; i < str.length; i++) {
if (dict[str[i]] === str[i]) {
return false;
} else {
dict[str[i]] = str[i];
}
}
return true;
}
```
