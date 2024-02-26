Codewars Kata: https://www.codewars.com/kata/62ad72443809a4006998218a

Name: Likes Vs Dislikes

Solution:

function likeOrDislike(buttons) {
let count = 0;
for (let i = buttons.length - 1; i > 0; i--) {
if (buttons[i] === buttons[i - 1]) {
count += 1;
} else {
break;
}
}
count++;
if (count % 2 === 0) {
return "Nothing";
} else if (buttons.length === 0){
return "Nothing";
}else {
console.log(buttons.length - 1);
return buttons[buttons.length - 1];
}
}
