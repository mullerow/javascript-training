Codewars Kata: https://www.codewars.com/kata/5412509bd436bd33920011bc/javascript

Name: Credit Card Mask

Solution:

function maskify(cc) {
cc = cc.split("");
let result = "";
for (i = 0; i < cc.length; i++) {
if (i < cc.length - 4) {
cc[i] = "#";
result += cc[i];
} else {
result += cc[i];
}
}
return result;
}
