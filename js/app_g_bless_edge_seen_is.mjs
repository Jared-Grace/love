import { app_g_bless_edge_inside } from "./app_g_bless_edge_inside.mjs";
import { g_coordinates_axes_generic } from "./g_coordinates_axes_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export function app_g_bless_edge_seen_is(box, point) {
  arguments_assert(arguments, 2);
  ("Whether a place on the screen is inside the part of it the player can actually look at.");
  ("Asked by pulling the place back inside the box and seeing whether it MOVED. A point that was already in there comes back unchanged, and a point outside comes back on the edge - so one pull answers the question and gives the answer the arrow needs next, without a second reading of the same four numbers written a different way round.");
  ("The two directions are asked one after the other rather than together, because a person off the side of the screen and a person off the top are both out of sight and only somebody inside on BOTH counts is in view.");
  let inside = app_g_bless_edge_inside(box, point, 0);
  let same = g_coordinates_axes_generic(inside, point, equal);
  let across_is = property_get(same, "x");
  let along_is = property_get(same, "y");
  if (across_is) {
    return along_is;
  }
  return false;
}
