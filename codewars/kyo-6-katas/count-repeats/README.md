CodeWars Kata: https://www.codewars.com/kata/598ee7b6ec6cb90dd6000061

Kata: Count Repeats

Solution: (Not yet fully operational!)

function countRepeats(stringy) {
let array = [];
let count = 0;
letspliceArray = [];
stringy = stringy.toUpperCase();
array = stringy.split("");
console.log(
"-----------------------------------------------------------------"
);
console.log("START:", array);

for (i = 0; i < array.length; i++) {
console.log(array[i], array[i + 1]);
if (array[i] === array[i + 1] && array[i + 1]) {
spliceArray = array.splice(i + 1, 1, array[i + 1].toLowerCase());
console.log("splicearray:", spliceArray);
console.log("after splice", array, "i", i);
count += 1;
}
}
console.log("count", count);
return count;
}
