import { arguments_assert } from "./arguments_assert.mjs";
import { math_max } from "./math_max.mjs";
import { math_min } from "./math_min.mjs";
export function math_number_clamp(value, low, high) {
  arguments_assert(arguments, 3);
  ("A number pulled back inside a pair of limits - itself when it already lies between them, and the nearer limit when it does not.");
  ("The two limits are applied in a fixed order, so a pair given the wrong way round answers the LOW one rather than throwing. That is deliberate: a caller working out limits from a box on the screen can hand over a box with no width in it while a page is still being laid out, and an arrow parked at one edge is a great deal better than a page that stops.");
  let not_below = math_max(value, low);
  let inside = math_min(not_below, high);
  return inside;
}
