import {ROMAN_NUMS, STANDARD_NUMS} from './number_definitions'

function convertStdToRoman(num: number): string | undefined {
    if(!num || num<1 || num>3000) return undefined;
  
    let romanResult = ""
    for(let i=0; i<STANDARD_NUMS.length; i++) {
        while(num >= STANDARD_NUMS[i]) {
            romanResult += ROMAN_NUMS[i]
            num -= STANDARD_NUMS[i]
        }
    }
    
    return romanResult;
}

module.exports = convertStdToRoman;
