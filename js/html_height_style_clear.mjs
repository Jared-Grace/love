import { arguments_assert } from "./arguments_assert.mjs";
import { html_size_style_clear } from "./html_size_style_clear.mjs";
export function html_height_style_clear(component) {
  arguments_assert(arguments, 1);
  ("give a thing its own height back: no height held for it, nothing timing a change of height, nothing hidden that overflows it");
  html_size_style_clear(component, "height");
}
