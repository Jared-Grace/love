import { html_div } from "../../love/js/html_div.mjs";
import { html_display_flex } from "../../love/js/html_display_flex.mjs";
import { app_shared_button_arrow_previous } from "../../love/js/app_shared_button_arrow_previous.mjs";
import { app_shared_button_arrow_next } from "../../love/js/app_shared_button_arrow_next.mjs";
import { html_flex_grow_1_multiple } from "../../love/js/html_flex_grow_1_multiple.mjs";
export function app_shared_arrows_wide_unit(parent, unit, on_previous, on_next) {
  let row = html_div(parent);
  html_display_flex(row);
  let l = app_shared_button_arrow_previous(row, unit, on_previous);
  let r = app_shared_button_arrow_next(row, unit, on_next);
  html_flex_grow_1_multiple([l, r]);
  return row;
}
