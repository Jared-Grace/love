import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { math_number_clamp } from "./math_number_clamp.mjs";
export function app_g_bless_edge_inside(box, point, pad) {
  arguments_assert(arguments, 3);
  ("A place on the screen pulled back inside the box, kept the given distance clear of every edge.");
  ("Both callers ask this one question and read the answer differently. One wants the place itself, to stand the arrow there; the other only wants to know whether the place MOVED, which is the same as asking whether it was inside to begin with. Written twice, the two would be free to disagree about where the edge is, and the arrow would then be put away on a different line from the one it is drawn on - a flicker at the boundary rather than a clean handover to the arrow over the person's head.");
  ("One distance serves all four edges because what it is for is fitting a thing of known size in, and that thing TURNS - so the room it needs on one side is the room it needs on all of them.");
  let person_x = property_get(point, "x");
  let person_y = property_get(point, "y");
  let box_left = property_get(box, "left");
  let box_top = property_get(box, "top");
  let box_right = property_get(box, "right");
  let box_bottom = property_get(box, "bottom");
  let left = add(box_left, pad);
  let right = subtract(box_right, pad);
  let x = math_number_clamp(person_x, left, right);
  let top = add(box_top, pad);
  let bottom = subtract(box_bottom, pad);
  let y = math_number_clamp(person_y, top, bottom);
  let inside = {
    x,
    y,
  };
  return inside;
}
