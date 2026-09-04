import { html_style_assign } from "./html_style_assign.mjs";
export function html_flex_row_gap(component, value) {
  "lay this component's children out in a row, side by side, with the same space between every pair of them";
  html_style_assign(component, {
    display: "flex",
    "flex-direction": "row",
    gap: value,
  });
}
