import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function html_raised_clear(component) {
  arguments_assert(arguments, 1);
  ("set a piece back down among the rest of the page, where whatever overlaps it is settled by the page rather than by anything said here");
  html_style_set(component, "position", "");
  html_style_set(component, "z-index", "");
}
