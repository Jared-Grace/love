import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_box_shadow_inset_value(color, width) {
  arguments_assert(arguments, 2);
  ("an edge of the given colour and thickness drawn just inside a thing's own edge, given as a shadow value ready to be set");
  ("What a border would draw, except that a border is drawn OUTSIDE the box and so grows it. On something set into a line of writing that growth has nowhere to go, and the edge stands proud of the line above and below it; drawn inside, the thing keeps exactly the room it already had.");
  let value = text_combine_multiple(["inset 0 0 0 ", width, " ", color]);
  return value;
}
