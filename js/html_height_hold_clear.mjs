import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function html_height_hold_clear(component) {
  arguments_assert(arguments, 1);
  ("let go of a height being held for a thing, and of anything timing a change of it, so it takes the height its own contents want");
  ("Said in the middle of a change of height as well as at the end of one: a height still being held would be the answer to how tall the new contents are, and the new contents are exactly what is being asked about.");
  html_style_set(component, "transition", "");
  html_style_set(component, "height", "");
}
