My Solution for: https://www.codewars.com/kata/5266876b8f4bf2da9b000362

Kata-title: Who likes it?

function likes(names) {
let amountNames = names.length;
let message = ["no one"," and "," others"," like this"," likes this",", ",];
if (amountNames === 0) {
return message[0] + message[4];
} else if (amountNames === 1) {
return names[0] + message[4];
} else if (amountNames === 2) {
return names[0] + message[1] + names[1] + message[3];
} else if (amountNames === 3) {
return (
names[0] + message[5] + names[1] + message[1] + names[2] + message[3]
);
} else {
return (names[0] + message[5] + names[1] + message[1] + (amountNames - 2) + message[2] + message[3]);
}
}
