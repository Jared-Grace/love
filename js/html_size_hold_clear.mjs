import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function html_size_hold_clear(component, dimension) {
  arguments_assert(arguments, 2);
  ("let go of a height or width being held for a thing, and of anything timing a change of it, so it takes the size its own contents want; dimension is height or width");
  ("Said in the middle of a change of size as well as at the end of one: a size still being held would be the answer to how big the new contents are, and the new contents are exactly what is being asked about.");
  html_style_set(component, "transition", "");
  html_style_set(component, dimension, "");
}
