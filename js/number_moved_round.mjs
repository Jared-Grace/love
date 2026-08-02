import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
import { round } from "./round.mjs";
export function number_moved_round(start, span, part) {
  "A whole number found by starting somewhere and going the given part of the way across the given span.";
  "The part is not held to nothing-to-all. A part of one goes the whole span, a part of a half goes half of it, and a part below nothing goes back the other way - which is what lets one caller ramp forwards and another reach either side of a middle.";
  "The rounding is here rather than at the callers because a thing counted in whole units - people, turns, plants - has no half, and every caller that walks a span like this is counting something whole.";
  arguments_assert(arguments, 3);
  let moved = multiply(span, part);
  let landed = start + moved;
  let r = round(landed);
  return r;
}
