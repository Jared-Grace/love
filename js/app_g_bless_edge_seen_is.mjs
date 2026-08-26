import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { math_number_clamp } from "./math_number_clamp.mjs";
import { equal } from "./equal.mjs";
export function app_g_bless_edge_seen_is(box, point) {
  arguments_assert(arguments, 2);
  ("Whether a place on the screen is inside the part of it the player can actually look at.");
  ("Asked by pulling the place back inside the box and seeing whether it MOVED. A point that was already in there comes back unchanged, and a point outside comes back on the edge - so one pull answers the question and gives the answer the arrow needs next, without a second reading of the same four numbers written a different way round.");
  ("The two directions are asked one after the other rather than together, because a person off the side of the screen and a person off the top are both out of sight and only somebody inside on BOTH counts is in view.");
  let person_x = property_get(point, "x");
  let person_y = property_get(point, "y");
  let box_left = property_get(box, "left");
  let box_top = property_get(box, "top");
  let box_right = property_get(box, "right");
  let box_bottom = property_get(box, "bottom");
  let seen_x = math_number_clamp(person_x, box_left, box_right);
  let seen_y = math_number_clamp(person_y, box_top, box_bottom);
  let across_is = equal(seen_x, person_x);
  let along_is = equal(seen_y, person_y);
  if (across_is) {
    return along_is;
  }
  return false;
}
