import { html_style_set } from "./html_style_set.mjs";
export function html_flex_shrink_0(component) {
  "keep this child of a row at the width it asked for even when the row is too narrow for everything in it, so what gives way is a neighbour rather than this";
  html_style_set(component, "flex-shrink", "0");
}
