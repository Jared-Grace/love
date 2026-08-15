import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function html_height_style_clear(component) {
  arguments_assert(arguments, 1);
  ("give a thing its own height back: no height held for it, nothing timing a change of height, nothing hidden that overflows it");
  ("Said both before a height is measured and after a height has finished changing. Before, because a height still being held from a change that has not finished would be measured instead of the height the thing actually wants; after, because a height left held stops the thing ever growing again on its own.");
  html_style_set(component, "transition", "");
  html_style_set(component, "height", "");
  html_style_set(component, "overflow", "");
}
