console.log("her mit den Problemen!");

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
  },
  tier2: {
    name: "Olga",
    alter: 2,
    geschlecht: "weiblich",
    wohnhaft: "Eisenhüttenstadt",
    kennungsId: 12342,
    lebend: true,
  },
  tier3: {
    name: "Richard",
    alter: 14,
    geschlecht: "männlich",
    wohnhaft: "Recklinghausen",
    kennungsId: 12343,
    lebend: false,
  },
};

console.log(testObject.tier1.alter);

console.log(testObject.tier2);

testObject.newProperty = "new Entry";

console.log(testObject.newProperty);
