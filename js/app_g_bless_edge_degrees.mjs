import { g_coordinates_axes_generic } from "./g_coordinates_axes_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { math_atan2_degrees } from "./math_atan2_degrees.mjs";
export function app_g_bless_edge_degrees(box, point) {
  arguments_assert(arguments, 2);
  ("Which way the edge arrow has to be turned to be aimed at somebody, in degrees clockwise from pointing right.");
  ("The turn is measured from the MIDDLE of what the player is looking at to the person, which is the same as from the player to the person except at the edges of the world, where the view stops sliding and the player walks across it.");
  ("Measured from where the arrow is standing instead, it would point along the edge it is sitting on and say nothing: the arrow is put on the edge nearest the person, so the line from there to them runs almost flat.");
  let away = g_coordinates_axes_generic(point, box, subtract);
  let right_of = property_get(away, "x");
  let down = property_get(away, "y");
  let degrees = math_atan2_degrees(down, right_of);
  return degrees;
}
