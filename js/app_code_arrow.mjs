import { html_div } from "./html_div.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_code_arrow_svg } from "./app_code_arrow_svg.mjs";
export function app_code_arrow(parent) {
  "a prominent rightwards arrow for derivation steps - a big triangular head on a short line. Drawn rather than typed, so it centres exactly (a text arrow's ink sits low in its line box) and occupies only its own width (no glyph side bearings to cancel out). One place to change the derivation-arrow look";
  let arrow = html_div(parent);
  html_text_set(arrow, app_code_arrow_svg());
  ("flex + line-height 0 makes the wrapper exactly as tall as the drawing, so the row centres it against the chips and gains no extra height");
  html_style_set(arrow, "display", "flex");
  html_style_set(arrow, "align-items", "center");
  html_style_set(arrow, "line-height", "0");
  return arrow;
}
