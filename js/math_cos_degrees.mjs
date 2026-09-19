import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
export function math_cos_degrees(degrees) {
  arguments_assert(arguments, 1);
  ("How far along a turn of so many degrees carries, measured across - one at no turn at all, nought at a quarter turn, minus one at a half turn.");
  ("Degrees rather than radians because every caller in this repo holds an angle in degrees: a hue on a colour wheel, a direction round a ring of copies, a rotation written into a style. Each of those had to multiply by pi over a hundred and eighty at the call site, and that factor mistyped goes wrong quietly rather than loudly. This is the partner of ",
    fn_name("math_atan2_degrees"),
    ", which already answers in degrees for the same reason.");
  let half_turn = 180;
  let per_degree = divide(Math.PI, half_turn);
  let radians = multiply(degrees, per_degree);
  let across = Math.cos(radians);
  return across;
}
