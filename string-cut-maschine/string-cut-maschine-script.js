console.log("ich schneide strings wie es mir gefällt!");

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let testSting = "hjkdashblnpofnsmxqpsbaaddjfeoaejn";

let array = [];

let cuttedString = [];

let count = 0;

for (let x = 0; x < testSting.length; x++) {
  letter = testSting[x];

  for (let i = 0; i < testSting.length; i++) {
    console.log("i=", testSting.charAt(i), "letter=", letter);

    if (testSting.charAt(i) === letter) {
      count += 1;
      if (count === 2) {
        console.log(
          "ERWISCHT!!!!!!!!!!!!!!!!!!",
          "gefundener Buchstabe:",
          testSting.charAt(i),
          letter,
          "count:",
          count
        );
        count = 0;
      }

      cuttedString = testSting.slice(i, 1);
      console.log("cuttedString:", cuttedString);
    }
  }
}
console.log(array);
// trenne immer den string ab wenn der erste buchstabe sich wiederholt
// result:  [hjkdash, blnpofnsmxqpsb, aa, dd, jfeoaej, n]
