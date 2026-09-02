import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { number_part_way } from "./number_part_way.mjs";
export function g_coordinates_part_way(start, end, fraction) {
  arguments_assert(arguments, 3);
  ("The place a given fraction of the way from one point on the grid to another, counted in");
  ("squares.");
  ("FRACTIONAL on purpose, and the one thing that separates it from every other coordinate");
  ("in this game. A coordinate normally names a square somebody is standing on, but a camera");
  ("handed one square and then the next would step across the street rather than slide over");
  ("it. This hands back the point in between and leaves the rounding, if any is wanted at");
  ("all, to whoever is aiming.");
  let start_x = property_get(start, "x");
  let end_x = property_get(end, "x");
  let x = number_part_way(start_x, end_x, fraction);
  let start_y = property_get(start, "y");
  let end_y = property_get(end, "y");
  let y = number_part_way(start_y, end_y, fraction);
  let r = {
    x,
    y,
  };
  return r;
}
