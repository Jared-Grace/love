import { arguments_assert } from "./arguments_assert.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
export function math_atan2_degrees(down, right) {
  arguments_assert(arguments, 2);
  ("Which way one point lies from another, as degrees turning CLOCKWISE from due east.");
  ("Screen coordinates count DOWNWARDS, so the two halves are named for the screen and not for a graph - down and right, rather than y and x. Named y and x, every caller has to remember that a positive y is below and that the turn therefore comes out clockwise rather than the anticlockwise a maths book draws, and a caller who forgets gets an arrow pointing at the reflection of what it was aimed at.");
  ("Clockwise from east because that is what an arrow drawn pointing right is rotated by, and an arrow is what every caller of this is aiming. A different zero would be correct too and would make every call site subtract the difference.");
  let radians = Math.atan2(down, right);
  let half_turn = 180;
  let per_radian = divide(half_turn, Math.PI);
  let degrees = multiply(radians, per_radian);
  return degrees;
}
