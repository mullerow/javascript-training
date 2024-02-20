console.log("her mit den Problemen!");

/*

const testObject = {
  ordnung: "Raubtiere",
  unterordnung: "Hundeartige",
  familie: "Hunde",
  tribus: "echte Hunde",
  gattung: "wolfs- und Schkalartige",
  art: "wolf",
  tier1: {
    name: "Steffen",
    alter: 8,
    geschlecht: "männlich",
    wohnhaft: "duisburg",
    kennungsId: 12341,
    lebend: true,
    friends: {
      friend1: "Olga",
      friend2: "Rudi",
    },
  },
  tier2: {
    name: "Olga",
    alter: 2,
    geschlecht: "weiblich",
    wohnhaft: "Eisenhüttenstadt",
    kennungsId: 12342,
    lebend: true,
    friends: {
      friend1: "Steffen",
      friend2: "Rudi",
    },
  },
  tier3: {
    name: "Richard",
    alter: 14,
    geschlecht: "männlich",
    wohnhaft: "Recklinghausen",
    kennungsId: 12343,
    lebend: false,
    friends: {
      friend1: "hansi",
    },
  },
};

console.log(testObject.tier1.alter);

console.log(testObject.tier2);

testObject.newProperty = "new Entry";

console.log(testObject.newProperty);



///// CODEWARS  ///////////////////////////////////////

let count = 0;

function isIsogram(str) {
  //...
  for (i = 0; i < str.length; i++) {
    letter = str[i];
    count += 1;
    console.log("count:", count);
    for (x = 1 + count; x < str.length - count; x++) {
      if (letter === str.charAt(i)) {
        return false;
      } else {
        return true;
      }
    }
  }
}

console.log("count:", count);
console.log("hab dich!");

console.log("Dermatoglyphics:", isIsogram("Dermatoglyphics"));

*/

////////  Übung LIVESESSION ////////////////////////////////////////////////

const teachers = [];

const favName = "Joe";
teachers.push(favName);

teachers.push("Ferdi");

teachers.unshift("Nico");

teachers.unshift("Joe");
const joeIndex = teachers.indexOf("Joey");

const myNums = [7, 3, 8, 12];

teachers.splice(3, 0, myNums);
myNums.splice(1, 2);
teachers[3][1] = "Nina";

console.log(myNums);
console.log(teachers);

// Erstelle ein Objekt `bootcamp` das die names "people" und "noses" hat.

const bootcamp = { people: [""], nose: 0 };

// Das Value für "people" ist ein leeres Array
// Das Value für "noses" ist 0
// Loope durch `teachers`.
// Wenn das item ein String ist, füge es zu der "people" Liste hinzu
// Wenn du auf ein Array Objekt stößt, dann Loope durch dieses und wiederhole den Vorgang
// Wenn du eine Person zu "people" hinzufügst, zähle "noses" hoch
// Code Wiederholung ist okay

let countString = 0;

for (i = 0; i < teachers.length; i++) {
  console.log(teachers[i]);

  if (typeof teachers[i] === "string") {
    bootcamp["people"][countString] = teachers[i];
    countString += 1;
    bootcamp.nose += 1;
  } else if (typeof teachers[i] === "object") {
    for (y = 0; y < teachers[i].length; y++)
      if (typeof teachers[i][y] === "string") {
        bootcamp["people"][countString] = teachers[i][y];
        countString += 1;
        bootcamp.nose += 1;
      }
  }
}

// Erstelle ein weiteres Property in `bootcamp` mit dem Namen "lessonFinished" und dem Value false
// Nutze die Square bracket Notation!

bootcamp["lessionFinished"] = false;

console.log(bootcamp);

// Setze das Value von lessonFinished von `false` auf `true`
// Nutze die Dot Notation!

bootcamp.lessionFinished = true;

console.log(bootcamp);
