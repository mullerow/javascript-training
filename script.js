console.log("juten MORGEN!");

let testVar1 = 9;
let testVar2 = 2;

function pythagoras(a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

console.log("Result Pythagoras:", pythagoras(testVar1, testVar2));

function mathCalc(a, b) {
  return 2 / a + 4 * b;
}

console.log("Result mathCalc:", mathCalc(testVar1, testVar2));

if (pythagoras(testVar1, testVar2) > mathCalc(testVar1, testVar2)) {
  console.log("Pythagoras wins!");
} else {
  console.log("Pythagoras lose!");
}
