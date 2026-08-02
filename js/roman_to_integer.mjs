import { less_than } from "./less_than.mjs";
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
    for (let i = 0; less_than(i, roman.length); i++) {
      let v1 = values[roman[i]];
      let v2 = values[roman[text_combine(i, 1)]] || 0;
      total += less_than(v1, v2) ? -v1 : v1;
    }
    return total;
  }
  function parseRomanOrInteger(roman_or_integer) {
    let match = roman_or_integer.match(
      /^([ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫⅬⅭⅮⅯIVXLCDM]+)([a-zA-Z]*)$/,
    );
    if (not(match)) {
      return roman_or_integer;
    }
    let romanPart = match[1];
    let suffix = match[2] || "";
    let asciiRoman = unicodeToAscii(romanPart);
    let left = romanToInt(asciiRoman);
    let v5 = text_combine(left, suffix);
    return v5;
  }
  let v6 = parseRomanOrInteger(input);
  return v6;
}
