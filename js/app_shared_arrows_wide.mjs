import { html_div } from "./html_div.mjs";
import { html_display_flex } from "./html_display_flex.mjs";
import { app_replace_button_arrow_left } from "./app_replace_button_arrow_left.mjs";
import { app_replace_button_arrow_right } from "./app_replace_button_arrow_right.mjs";
import { html_flex_grow_1_multiple } from "./html_flex_grow_1_multiple.mjs";
export function app_shared_arrows_wide(parent, on_left, on_right) {
  let row = html_div(parent);
  html_display_flex(row);
  let l = app_replace_button_arrow_left(row, on_left);
  let r = app_replace_button_arrow_right(row, on_right);
  html_flex_grow_1_multiple([l, r]);
  return row;
}
