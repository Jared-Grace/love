import { floor } from "./floor.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function text_whole_number_or_empty(text) {
  "$plain text";
  "The whole number of nothing or more that text spells, written as digits, or empty text when it spells none - so what a person typed into a number box is kept as a whole number or not at all. A fraction is cut down to the whole number below it.";
  arguments_assert(arguments, 1);
  let trimmed = text.trim();
  if (equal(trimmed, "")) {
    let r = "";
    return r;
  }
  let p = Number(trimmed);
  let n = floor(p);
  let b = Number.isFinite(n);
  if (not(b) || less_than(n, 0)) {
    let r2 = "";
    return r2;
  }
  let r3 = String(n);
  return r3;
}
