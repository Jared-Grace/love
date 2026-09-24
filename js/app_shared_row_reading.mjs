import { html_div } from "./html_div.mjs";
import { html_display_flex } from "./html_display_flex.mjs";
import { app_shared_rtl_is } from "./app_shared_rtl_is.mjs";
import { html_direction_rtl_set } from "./html_direction_rtl_set.mjs";
export function app_shared_row_reading(parent) {
  "a row laid out the way the reader reads, so what comes first in it comes first in that reader's own direction";
  let row = html_div(parent);
  html_display_flex(row);
  let rtl = app_shared_rtl_is();
  html_direction_rtl_set(row, rtl);
  return row;
}
