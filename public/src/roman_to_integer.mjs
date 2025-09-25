import { not } from "./not.mjs";
export function roman_to_integer(input) {
  function unicodeToAscii(roman) {
    const map = {
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
    const values = {
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
      const v1 = values[roman[i]];
      const v2 = values[roman[i + 1]] || 0;
      total += v1 < v2 ? -v1 : v1;
    }
    return total;
  }
  function parseRomanOrInteger(input) {
    const match = input.match(/^([ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫⅬⅭⅮⅯIVXLCDM]+)([a-zA-Z]*)$/);
    if (not(match)) {
      const num = parseInt(input, 10);
      let v4 = isNaN(num)
        ? null
        : {
            number: num,
            suffix: "",
          };
      return v4;
    }
    const romanPart = match[1];
    const suffix = match[2] || "";
    const asciiRoman = unicodeToAscii(romanPart);
    let v5 = romanToInt(asciiRoman) + suffix;
    return v5;
  }
  let v6 = parseRomanOrInteger(input);
  return v6;
}
