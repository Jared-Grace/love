import { html_align_items_center } from "./html_align_items_center.mjs";
import { html_style_gap } from "./html_style_gap.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_display_flex } from "./html_display_flex.mjs";
export function app_code_row_flex_center(parent) {
  "a horizontal row whose items (code chips and the derivation arrow) are centred VERTICALLY, so a taller arrow lines up with the middle of the chips instead of dropping to the text baseline. Wraps on narrow screens";
  let row = html_div(parent);
  html_display_flex(row);
  html_align_items_center(row);
  html_style_set(row, "flex-wrap", "wrap");
  html_style_gap(row, app_shared_spaced_tiny_gap());
  return row;
}
