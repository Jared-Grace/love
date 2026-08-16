import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function html_style_position_fixed(component) {
  arguments_assert(arguments, 1);
  ("lift a thing out of the flow of the page and place it against the window instead, so it keeps no room where it was and moving it moves nothing else");
  html_style_set(component, "position", "fixed");
}
