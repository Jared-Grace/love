import { marker } from "./marker.mjs";
export function roman_to_integer() {
// Convert Unicode Roman numerals (like ⅩⅧ) to ASCII Roman letters
function unicodeToAscii(roman) {
  const map = {
    'Ⅰ':'I','Ⅱ':'II','Ⅲ':'III','Ⅳ':'IV','Ⅴ':'V','Ⅵ':'VI','Ⅶ':'VII','Ⅷ':'VIII','Ⅸ':'IX','Ⅹ':'X',
    'Ⅺ':'XI','Ⅻ':'XII','Ⅼ':'L','Ⅽ':'C','Ⅾ':'D','Ⅿ':'M'
  };
  return roman.split('').map(ch => map[ch] ?? ch).join('');
}

// Convert ASCII Roman numerals (I,V,X,L,C,D,M) to integer
function romanToInt(roman) {
  const values = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
  let total = 0;
  for (let i = 0; i < roman.length; i++) {
    const v1 = values[roman[i]];
    const v2 = values[roman[i+1]] || 0;
    total += v1 < v2 ? -v1 : v1;
  } 
  return total;
}

// Main function
function parseRomanOrInteger(input) {
  const match = input.match(/^([ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫⅬⅭⅮⅯIVXLCDM]+)([a-zA-Z]*)$/);
  if (!match) {
    // Not Roman numerals -> must be a positive integer
    const num = parseInt(input, 10);
    return isNaN(num) ? null : { number: num, suffix: '' };
  }

  const romanPart = match[1];
  const suffix = match[2] || '';
  const asciiRoman = unicodeToAscii(romanPart);
  return { number: romanToInt(asciiRoman), suffix };
}
}
