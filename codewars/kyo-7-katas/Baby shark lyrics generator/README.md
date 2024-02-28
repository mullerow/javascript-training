Codewars Kata: https://www.codewars.com/kata/5d076515e102162ac0dc514e

Name: Baby Shark Lyrics

Solution:
```js
function babySharkLyrics(){
let r="";
const a=["Baby shark","Mommy shark","Daddy shark","Grandma shark","Grandpa shark","Let's go hunt"," doo".repeat(6) +"\n",];
for (i=0;i<a.length-1;i++){r+=(a[i]+","+a[6]).repeat(3)+a[i]+"!\n";}return r + "Run away,…";}
```
