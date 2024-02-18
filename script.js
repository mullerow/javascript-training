console.log("juten MORGEN! Lets go, heute wird gecoded! :D");

/*

function oddEven(number) {
  if (number % 2 === 0) {
    return "should be even ";
  } else {
    return "should be odd ";
  }
}

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even


let testVar1 = 4;
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

// TODO: Implement the oddEven function

function oddEven(number) {
  if (number % 2 === 0) {
    // mudolo-Operator
    return "Die Zahl ist gerade";
  } else {
    return "Die Zahl ist ungerade";
  }
}

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

// TODO: Implement the oldYoung function

function oldYoung(age) {
  if (age >= 0 && age < 16) return "Children";
  else if (age >= 16 && age < 50) return "young person";
  else if (age < 0) {
    return "this is a impossible age, please correct the value";
  } else {
    return "elder person";
  }
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person


// TODO: Implement the oddNumbers function

let result = "";

function oddNumbers(startnumber, stopnumber) {
  for (let i = startnumber; i <= stopnumber; i++) {
    if (i % 2 !== 0) {
      result += i + ",";
    }
  }
  console.log(result);
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

// TODO: Implement the charCount function

let array = [];
let count = 0;

function consoleLog(finalresult) {
  console.log(
    "Das Wort [",
    finalresult[0],
    "] enthält den Buchstaben [",
    finalresult[1],
    "] genau [",
    finalresult[2],
    "] mal!"
  );
}

function charCount(word, letter) {
  wordlength = word.length;
  array = [];
  for (let i = 0; i < wordlength; ++i) {
    if (word.charAt(i) === letter) {
      count++;
    }
    // console.log(count);
  }
  result = count;
  resultArray = [word, letter, result];
  // console.log("result:", result);
  count = 0;

  return resultArray;
}

finalresult = charCount("hello", "l");

consoleLog(finalresult);

// result should be: 2
finalresult = charCount("mama", "m");
// result should be: 2
consoleLog(finalresult);

finalresult = charCount("Resümee", "e");
// result should be: 3
consoleLog(finalresult);



// TODO: Implement the removeItem function /////////

function removeItem(array, position) {
  arrayCopy = array.slice(position);
}

const ainmals = ["Dog", "Cat", "Lion"];
console.log("hier sollte [Cat Lion] :", removeItem(ainmals, 1));
// result should be: ["Cat", "Lion"]

console.log("original:", ainmals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log("original:", fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

*/

///////// TODO: Implement the sumOfCharacters function  ////////

let amountLetters = 0;

function sumOfCharacters(array) {
  for (let i = 0; i < array.length; i++) {
    item = array[i];
    if (typeof array[i] === "string") {
      amountLetters = amountLetters + array[i].length;
    }
  }
  return amountLetters;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(
  "die Zeichenlänge aller Strings ergibt zusammengefasst: [",
  sumOfCharacters(arr1),
  "]"
);
// result should be: 17

amountLetters = 0;

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(
  "die Zeichenlänge aller Strings ergibt zusammengefasst: [",
  sumOfCharacters(arr2),
  "]"
);
// result should be: 55
