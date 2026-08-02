import { floor } from "./floor.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { less_than } from "./less_than.mjs";
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
  if (equal(num, 0)) {
    let v = "zero";
    return v;
  }
  let words = "";
  let group = 0;
  while (greater_than(num, 0)) {
    let n = mod(num, 1000);
    if (not_equal(n, 0)) {
      let str = "";
      let a2 = mod(n, 100);
      if (less_than(a2, 20)) {
        str = a[mod(n, 100)];
        let divided = divide(n, 100);
        n = floor(divided);
      } else {
        let left = mod(n, 100);
        let right = mod(n, 10);
        str = text_combine(
          b[subtract(left, right)],
          mod(n, 10) ? text_combine("-", a[mod(n, 10)]) : "",
        );
        let divided2 = divide(n, 100);
        n = floor(divided2);
      }
      if (greater_than(n, 0)) {
        str = text_combine_multiple([
          a[n],
          " hundred",
          str ? text_combine(" ", str) : "",
        ]);
      }
      words = text_combine_multiple([str, " ", g[group], " ", words]);
    }
    let divided3 = divide(num, 1000);
    num = floor(divided3);
    group++;
  }
  let v2 = words.trim().replace(/\s+/g, " ");
  return v2;
}
