import { floor } from "../../../love/public/src/floor.mjs";
export function number_to_words(num) {
  const a = [
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
  const b = [
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
  const g = ["", "thousand", "million", "billion", "trillion"];
  if (num === 0) {
    let v = "zero";
    return v;
  }
  let words = "";
  let group = 0;
  while (num > 0) {
    let n = num % 1000;
    if (n !== 0) {
      let str = "";
      if (n % 100 < 20) {
        str = a[n % 100];
        n = Math.floor(n / 100);
      } else {
        str = b[(n % 100) - (n % 10)] + (n % 10 ? "-" + a[n % 10] : "");
        n = Math.floor(n / 100);
      }
      if (n > 0) {
        str = a[n] + " hundred" + (str ? " " + str : "");
      }
      words = str + " " + g[group] + " " + words;
    }
    num = Math.floor(num / 1000);
    group++;
  }
  let v2 = words.trim().replace(/\s+/g, " ");
  return v2;
}
