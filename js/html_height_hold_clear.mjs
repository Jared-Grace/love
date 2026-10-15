import { arguments_assert } from "./arguments_assert.mjs";
import { html_size_hold_clear } from "./html_size_hold_clear.mjs";
export function html_height_hold_clear(component) {
  arguments_assert(arguments, 1);
  ("let go of a height being held for a thing, and of anything timing a change of it, so it takes the height its own contents want");
  html_size_hold_clear(component, "height");
}
