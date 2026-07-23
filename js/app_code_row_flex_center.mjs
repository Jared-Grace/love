import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_code_row_flex_center(parent) {
  "a horizontal row whose items (code chips and the derivation arrow) are centred VERTICALLY, so a taller arrow lines up with the middle of the chips instead of dropping to the text baseline. Wraps on narrow screens";
  let row = html_div(parent);
  html_style_set(row, "display", "flex");
  html_style_set(row, "align-items", "center");
  html_style_set(row, "flex-wrap", "wrap");
  html_style_set(row, "gap", "0.25em");
  return row;
}
