import { ROMAN_NUMS, STANDARD_NUMS } from "./number_types";

function convertStdToRoman(num: number): string {
  if (!num || num < 1 || num > 3000) return "invalid number";

  let romanResult = "";
  for (let i = 0; i < STANDARD_NUMS.length; i++) {
    while (num >= STANDARD_NUMS[i]) {
      romanResult += ROMAN_NUMS[i];
      num -= STANDARD_NUMS[i];
    }
  }

  return romanResult;
}

module.exports = convertStdToRoman;
