import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function html_offset_transition_clear(component) {
  arguments_assert(arguments, 1);
  ("give a piece back to the page: it stands where the page says it stands, and changes to it are no longer slowed");
  html_style_set(component, "transition", "");
  html_style_set(component, "position", "");
  html_style_set(component, "left", "");
  html_style_set(component, "top", "");
}
