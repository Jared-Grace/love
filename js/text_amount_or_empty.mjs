import { round } from "./round.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
export function text_amount_or_empty(text) {
  "$plain text";
  "The amount of money of nothing or more that text spells, written as digits with at most two after the point, or empty text when it spells none - so what a person typed into a price box is kept as an amount or not at all. More than two places after the point are rounded to the nearest hundredth, and needless zeros at the end are dropped.";
  arguments_assert(arguments, 1);
  let trimmed = text.trim();
  if (equal(trimmed, "")) {
    let r = "";
    return r;
  }
  let p = Number(trimmed);
  let b = Number.isFinite(p);
  if (not(b) || less_than(p, 0)) {
    let r2 = "";
    return r2;
  }
  let n = multiply(p, 100);
  let hundredths = round(n);
  let divided = divide(hundredths, 100);
  let r3 = String(divided);
  return r3;
}
