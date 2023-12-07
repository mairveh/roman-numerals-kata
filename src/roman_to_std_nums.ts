import { ROMAN_NUMS, STANDARD_NUMS } from "./number_types";

function convertRomanToStd(roman: string): number | undefined {
  if (!roman) return undefined;

  let numResult = 0;
  for (let i = 0; i < roman.length; i++) {
    if (ROMAN_NUMS.indexOf(roman[i]) > -1) {
      if (
        i > 0 &&
        STANDARD_NUMS[ROMAN_NUMS.indexOf(roman[i])] >
          STANDARD_NUMS[ROMAN_NUMS.indexOf(roman[i - 1])]
      ) {
        numResult =
          numResult -
          2 * STANDARD_NUMS[ROMAN_NUMS.indexOf(roman[i - 1])] +
          STANDARD_NUMS[ROMAN_NUMS.indexOf(roman[i])];
      } else {
        numResult += STANDARD_NUMS[ROMAN_NUMS.indexOf(roman[i])];
      }
    } else {
      //invalid letter found
      return undefined;
    }
  }

  return numResult > 3000 ? undefined : numResult;
}

module.exports = convertRomanToStd;
