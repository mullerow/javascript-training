Codewars Kata: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

Name: Mumbling

Solution:
```js
function accum(word) {
let wordSmall = word.toLowerCase();
let wordBig = word.toUpperCase();
let finalArr = [];
for (i = 0; i < wordSmall.length; i++) {
finalArr[i] = wordBig[i] + wordSmall[i].repeat(i);
}
return finalArr.join("-");
}
```
