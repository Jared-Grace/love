import { html_span_text } from "./html_span_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_code_arrow(parent) {
  "a prominent rightwards arrow (→) for derivation steps - large and bold so each rewrite stands out. Meant to sit inside an app_code_row_flex_center row, which centres it vertically with the code chips. One place to change the derivation-arrow look";
  let arrow = html_span_text(parent, "→");
  html_style_set(arrow, "font-size", "2.4em");
  html_style_set(arrow, "font-weight", "bold");
  html_style_set(arrow, "line-height", "1");
  "the → glyph is drawn low in its line box, so flex centring still leaves it near the bottom of the chips - nudge it up to sit at the true middle";
  html_style_set(arrow, "transform", "translateY(-0.16em)");
  return arrow;
}
