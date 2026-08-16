import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function html_style_z_index(component, value) {
  arguments_assert(arguments, 2);
  ("how high above the page a thing stands where it overlaps something else - the higher of two overlapping things is the one seen");
  html_style_set(component, "z-index", value);
}
