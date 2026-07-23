import { html_span_text } from "./html_span_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_code_arrow(parent) {
  "a prominent rightwards arrow (→) for derivation steps - large and bold so each rewrite stands out. Meant to sit inside the centred flex row, which lines it up vertically with the code chips. One place to change the derivation-arrow look";
  let arrow = html_span_text(parent, "→");
  html_style_set(arrow, "font-size", "2.8em");
  html_style_set(arrow, "font-weight", "bold");
  ("line-height 0 collapses the arrow's line BOX to nothing so a big glyph does not grow the row (which added dead space, mostly above it); the glyph still draws full size, overflowing the collapsed box, and align-items centre puts that box - and so the glyph - at the middle of the chips");
  html_style_set(arrow, "line-height", "0");
  return arrow;
}
