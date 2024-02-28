Codewars Kata: https://www.codewars.com/kata/59377c53e66267c8f6000027

Name: Alphabet war

Solution:
```js
function alphabetWar(fight) {
const dict = {
w: 4,
p: 3,
b: 2,
s: 1,
m: -4,
q: -3,
d: -2,
z: -1,
};
let result = 0;

for (i = 0; i < fight.length; i++) {
for (key in dict) {
if (fight[i] === key) {
result += dict[fight[i]];
}
}
}
if (result < 0) {
return "Right side wins!";
} else if (result > 0) {
return "Left side wins!";
} else {
return "Let's fight again!";
}
}
```
