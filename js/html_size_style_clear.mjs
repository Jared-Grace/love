import { arguments_assert } from "./arguments_assert.mjs";
import { html_size_hold_clear } from "./html_size_hold_clear.mjs";
import { html_style_overflow_clear } from "./html_style_overflow_clear.mjs";
export function html_size_style_clear(component, dimension) {
  arguments_assert(arguments, 2);
  ("give a thing its own height or width back: no size held for it, nothing timing a change of size, nothing hidden that overflows it");
  ("Said after a size has finished changing, and it undoes all three at once, because all three were put on together and any one of them left behind changes what the thing does from then on.");
  html_size_hold_clear(component, dimension);
  html_style_overflow_clear(component);
}
