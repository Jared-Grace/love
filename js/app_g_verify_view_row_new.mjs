import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_display_flex } from "./html_display_flex.mjs";
import { html_style_gap } from "./html_style_gap.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { not } from "./not.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_g_verify_view_row_new(panel, first, small_gap, border) {
  arguments_assert(arguments, 4);
  let row = html_div(panel);
  html_display_flex(row);
  html_style_gap(row, small_gap);
  html_style_padding_x(row, small_gap);
  html_style_padding_y(row, small_gap);
  if (not(first)) {
    html_style_set(row, "border-top", "1px solid " + border);
  }
  html_style_set(row, "transition", "background-color .12s");
  return row;
}
