import { html_span_text } from "./html_span_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_code_arrow(parent) {
  "a prominent rightwards arrow (→) for derivation steps - larger and bold so each rewrite stands out from the surrounding text and code chips. One place to change the derivation-arrow look";
  let arrow = html_span_text(parent, "→");
  html_style_set(arrow, "font-size", "1.5em");
  html_style_set(arrow, "font-weight", "bold");
  html_style_set(arrow, "padding-left", "0.2em");
  html_style_set(arrow, "padding-right", "0.2em");
  html_style_set(arrow, "vertical-align", "middle");
  return arrow;
}
