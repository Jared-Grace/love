import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
import { floor } from "./floor.mjs";
export function multiply_floor(number, times) {
  arguments_assert(arguments, 2);
  ("A number scaled up and then cut down to the whole number below it.");
  ("Picking a place in a list at random, finding the rank a percentile falls on,");
  ("splitting a length into two parts by a fraction. A fraction is the natural way");
  ("to say how far along, and a whole number is the only thing a list or a count");
  ("can use, so the fraction stands between the two and is wanted nowhere else.");
  let scaled = multiply(number, times);
  let whole = floor(scaled);
  return whole;
}
