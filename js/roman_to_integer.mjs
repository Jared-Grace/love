import { not } from "./not.mjs";
import { text_combine } from "./text_combine.mjs";
export function roman_to_integer(input) {
  function unicodeToAscii(roman) {
    let map = {
      Ⅰ: "I",
      Ⅱ: "II",
      Ⅲ: "III",
      Ⅳ: "IV",
      Ⅴ: "V",
      Ⅵ: "VI",
      Ⅶ: "VII",
      Ⅷ: "VIII",
      Ⅸ: "IX",
      Ⅹ: "X",
      Ⅺ: "XI",
      Ⅻ: "XII",
      Ⅼ: "L",
      Ⅽ: "C",
      Ⅾ: "D",
      Ⅿ: "M",
    };
    function lambda(ch) {
      let v = map[ch] ?? ch;
      return v;
    }
    let v3 = roman.split("").map(lambda).join("");
    return v3;
  }
  function romanToInt(roman) {
    let values = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let total = 0;
    for (let i = 0; i < roman.length; i++) {
      let v1 = values[roman[i]];
      let v2 = values[roman[text_combine(i, 1)]] || 0;
      total += v1 < v2 ? -v1 : v1;
    }
    return total;
  }
  function parseRomanOrInteger(input) {
    let match = input.match(/^([ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫⅬⅭⅮⅯIVXLCDM]+)([a-zA-Z]*)$/);
    if (not(match)) {
      return input;
    }
    let romanPart = match[1];
    let suffix = match[2] || "";
    let asciiRoman = unicodeToAscii(romanPart);
    let v5 = text_combine(romanToInt(asciiRoman), suffix);
    return v5;
  }
  let v6 = parseRomanOrInteger(input);
  return v6;
}
