import { arguments_assert } from "./arguments_assert.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { round } from "./round.mjs";
export function percent_one_decimal(part, whole) {
  "$plain part";
  "$plain whole";
  "What share of a whole a part is, given as a percentage carried to one place after the point.";
  "★ IT IS THE FOUR LINES EVERY REPORT WAS WRITING OUT BY HAND. Dividing, multiplying by a thousand, rounding and dividing by ten is a spelling of one idea, and a report that spells it itself is a report that can round it differently from the next one. Written once, two reports cannot disagree about what eighty-seven and a half means.";
  "★ ONE PLACE IS CHOSEN, NOT LEFT TO THE READER. A whole number hides the difference between a share of nine in ten and a share of nine in ten and a half, which over thirty thousand verses is three hundred of them, and more places than one invite a reader to trust a measurement further than it was made.";
  arguments_assert(arguments, 2);
  let left = divide(part, whole);
  let scaled = multiply(left, 1000);
  let rounded = round(scaled);
  let percent = divide(rounded, 10);
  return percent;
}
