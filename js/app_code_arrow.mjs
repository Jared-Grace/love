import { html_span_text } from "./html_span_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_code_arrow(parent) {
  "a prominent rightwards arrow (→) for derivation steps - large and bold so each rewrite stands out. Meant to sit inside the centred flex row, which lines it up vertically with the code chips. One place to change the derivation-arrow look";
  let arrow = html_span_text(parent, "→");
  html_style_set(arrow, "font-size", "2.8em");
  html_style_set(arrow, "font-weight", "bold");
  ("line-height 0 collapses the arrow's line BOX to nothing so a big glyph does not grow the row (which added dead space, mostly above it); the glyph still draws full size, overflowing the collapsed box");
  html_style_set(arrow, "line-height", "0");
  ("centring the collapsed box centres the font's EM box, but the arrow's ink sits well below that (measured: ink spans 16px..2px above the baseline while the em-box centre is 19px above it, so the ink lands 10px low at 56px). Lift it by that ratio - in em, so it holds if the size changes");
  html_style_set(arrow, "transform", "translateY(-0.18em)");
  return arrow;
}
