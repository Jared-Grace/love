import { floor } from "./floor.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { mod } from "./mod.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
export function number_to_words(num) {
  let a = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let b = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  let g = ["", "thousand", "million", "billion", "trillion"];
  if (num === 0) {
    let v = "zero";
    return v;
  }
  let words = "";
  let group = 0;
  while (num > 0) {
    let n = mod(num, 1000);
    if (n !== 0) {
      let str = "";
      if (mod(n, 100) < 20) {
        str = a[mod(n, 100)];
        n = Math.floor(divide(n, 100));
      } else {
        str = text_combine(
          b[subtract(mod(n, 100), mod(n, 10))],
          mod(n, 10) ? text_combine("-", a[mod(n, 10)]) : "",
        );
        n = Math.floor(divide(n, 100));
      }
      if (n > 0) {
        str = text_combine_multiple([
          a[n],
          " hundred",
          str ? text_combine(" ", str) : "",
        ]);
      }
      words = text_combine_multiple([str, " ", g[group], " ", words]);
    }
    num = Math.floor(divide(num, 1000));
    group++;
  }
  let v2 = words.trim().replace(/\s+/g, " ");
  return v2;
}
