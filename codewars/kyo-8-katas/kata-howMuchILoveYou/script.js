// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

    "I love you"
    "a little"
    "a lot"
    "passionately"
    "madly"
    "not at all"

If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

*/

function howMuchILoveYou(nbPetals) {
  rest = (nbPetals - 6) / 6;
  rounds = Math.ceil(rest);
  reduced = nbPetals - rounds * 6;

  if (nbPetals === 1 || reduced / 1 === 1) {
    return "I love you";
  } else if (nbPetals === 2 || reduced / 2 === 1) {
    return "a little";
  } else if (nbPetals === 3 || reduced / 3 === 1) {
    return "a lot";
  } else if (nbPetals === 4 || reduced / 4 === 1) {
    return "passionately";
  } else if (nbPetals === 5 || reduced / 5 === 1) {
    return "madly";
  } else if (nbPetals === 6 || reduced / 6 === 1) {
    return "not at all";
  }
}
