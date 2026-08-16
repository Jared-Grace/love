import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function html_style_left(component, value) {
  arguments_assert(arguments, 2);
  ("how far in from the left edge a thing lifted out of the flow of the page stands");
  html_style_set(component, "left", value);
}
