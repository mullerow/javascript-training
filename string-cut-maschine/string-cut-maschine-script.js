console.log("ich schneide mir die strings, wie es mir gefällt!");

let testString = "hjkdashblnpofnsmxqpsbaaddjfeoaejn";

testString = "hjkdash";

let array = [];

let cuttedString = [];

let cuttedStringCount = 0;

let count = 0;

for (i = 0; i < testString.length; i++) {
  ///// erstellt array mit jeden buchstaben einzeln
  array[i] = testString.charAt(i);
}

console.log(array);

for (let x = 0; x < testString.length; x++) {
  // startet mit dem ersten buchstaben
  letter = testString[x];

  for (let i = 0; i < testString.length; i++) {
    console.log("i=", testString.charAt(i), "letter=", letter);

    if (testString.charAt(i) === letter) {
      count += 1;

      if (count === 2) {
        console.log(
          "ERWISCHT!!!!!!!!!!!!!!!!!!",
          "gefundener Buchstabe:",
          testString.charAt(i),
          letter,
          "count:",
          count
        );

        count = 0;

        cuttedString[cuttedStringCount] = array.splice(x, x + 1);
        console.log("cuttedString:", cuttedString);
        console.log("testString:", testString);
        cuttedStringCount += 1;
        testString = array.join("");
        console.log("gekürzter String:", testString);
      }
    }
  }
}
console.log(array);
// trenne immer den string ab wenn der erste buchstabe sich wiederholt
// result:  [hjkdash, blnpofnsmxqpsb, aa, dd, jfeoaej, n]
