import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function html_style_top(component, value) {
  arguments_assert(arguments, 2);
  ("how far down from the top edge a thing lifted out of the flow of the page stands");
  html_style_set(component, "top", value);
}
