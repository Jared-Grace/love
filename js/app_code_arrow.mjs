import { app_code_arrow_turned } from "./app_code_arrow_turned.mjs";
export function app_code_arrow(parent) {
  "a prominent rightwards arrow for derivation steps - a big triangular head on a short line. Drawn rather than typed, so it centres exactly (a text arrow's ink sits low in its line box) and occupies only its own width (no glyph side bearings to cancel out). One place to change the derivation-arrow look";
  let arrow = app_code_arrow_turned(parent, 0);
  return arrow;
}
