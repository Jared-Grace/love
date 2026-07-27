import { equal } from "./equal.mjs";
import { divide } from "./divide.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export function color_parse(written) {
  "read a css colour written as hex or as rgb into its four channels, so two spellings of one colour can be compared as numbers rather than as text. Three, four, six and eight digit hex all work, and a missing alpha means fully opaque. Anything it cannot read comes back as null, which is the honest answer for a name like transparent or currentColor.";
  let parsed = null;
  let hash = written.startsWith("#");
  if (hash) {
    let digits = written.slice(1);
    let short = equal(digits.length, 3) || equal(digits.length, 4);
    if (short) {
      function each_digit(d) {
        let r = d + d;
        return r;
      }
      digits = digits.split("").map(each_digit).join("");
    }
    let full = equal(digits.length, 6) || equal(digits.length, 8);
    if (not(full)) {
      return null;
    }
    let alpha = 1;
    let has_alpha = equal(digits.length, 8);
    if (has_alpha) {
      let v = digits.slice(6, 8);
      let top = parseInt(v, 16);
      alpha = divide(top, 255);
    }
    let v2 = digits.slice(0, 2);
    let v3 = digits.slice(2, 4);
    let v4 = digits.slice(4, 6);
    parsed = {
      red: parseInt(v2, 16),
      green: parseInt(v3, 16),
      blue: parseInt(v4, 16),
      alpha,
    };
    return parsed;
  }
  let inside = written.replace(/[^0-9., ]/g, "");
  function each_number(n) {
    let r2 = parseFloat(n);
    return r2;
  }
  let numbers = inside.split(",").map(each_number);
  let enough = greater_than_equal(numbers.length, 3);
  let b = numbers.slice(0, 3).some(Number.isNaN);
  let readable = enough && not(b);
  if (not(readable)) {
    return null;
  }
  let b2 = Number.isNaN(numbers[3]);
  let alpha_written = greater_than(numbers.length, 3) && not(b2);
  parsed = {
    red: numbers[0],
    green: numbers[1],
    blue: numbers[2],
    alpha: alpha_written ? numbers[3] : 1,
  };
  return parsed;
}
