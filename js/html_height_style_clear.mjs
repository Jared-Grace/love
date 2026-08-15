import { arguments_assert } from "./arguments_assert.mjs";
import { html_height_hold_clear } from "./html_height_hold_clear.mjs";
import { html_style_overflow_clear } from "./html_style_overflow_clear.mjs";
export function html_height_style_clear(component) {
  arguments_assert(arguments, 1);
  ("give a thing its own height back: no height held for it, nothing timing a change of height, nothing hidden that overflows it");
  ("Said after a height has finished changing, and it undoes all three at once, because all three were put on together and any one of them left behind changes what the thing does from then on.");
  html_height_hold_clear(component);
  html_style_overflow_clear(component);
}
