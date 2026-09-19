import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
export function math_sin_degrees(degrees) {
  arguments_assert(arguments, 1);
  ("How far a turn of so many degrees carries at right angles to where it started - nought at no turn at all, one at a quarter turn, nought again at a half turn.");
  ("The partner of ",
    fn_name("math_cos_degrees"),
    ", and the reason for degrees is the same: the angles this repo holds are all written in degrees, so converting at every call site put the same factor in many places instead of one.");
  ("Which way the answer points is left to the caller. On a graph a positive answer is up and on a screen it is down, and this cannot know which of those the caller is drawing on, so it names neither. ",
    fn_name("math_atan2_degrees"),
    " takes the opposite view and names the screen, because every one of its callers is aiming an arrow at something already drawn.");
  let half_turn = 180;
  let per_degree = divide(Math.PI, half_turn);
  let radians = multiply(degrees, per_degree);
  let along = Math.sin(radians);
  return along;
}
