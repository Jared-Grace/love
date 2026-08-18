import { html_button_widen } from "./html_button_widen.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
export function app_shared_button_wide(parent, text, lambda) {
  let b = app_shared_button(parent, text, lambda);
  html_button_widen(b);
  ("a wide button fills its own line, so the only button it can ever stand next to is one above or below it - which makes the space it keeps there part of what being wide means, said here once rather than by each screen that stacks a few. The margin a button carries for standing in a ROW is a hair's width, which is right beside a neighbour and reads as touching underneath one; three screens had already noticed and written their own gap by hand, all three within a whisker of this value, so this is their answer moved to where the next screen inherits it instead of rediscovering it");
  let gap = app_shared_spaced_tiny_gap();
  html_style_margin_y(b, gap);
  return b;
}
