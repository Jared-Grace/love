import { round } from "./round.mjs";
import { exponent } from "./exponent.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
export function number_round_places(value, places) {
  "A number rounded to a given count of places after the point - two places turns 0.6428 into 0.64.";
  "It is here for numbers that are READ rather than computed on. A share of words is a fraction with a tail of digits that says nothing, and printing the whole tail makes two numbers look different where the difference is below anything the reading can mean.";
  "Rounding is done by moving the point, rounding whole, and moving it back, which is the plain way to say it and is exact for the small counts of places a reading uses.";
  let moved = exponent(10, places);
  let up = multiply(value, moved);
  let whole = round(up);
  let back = divide(whole, moved);
  return back;
}
