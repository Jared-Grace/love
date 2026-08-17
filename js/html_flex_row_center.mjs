import { html_style_assign } from "./html_style_assign.mjs";
export function html_flex_row_center(row) {
  html_style_assign(row, {
    display: "flex",
    "flex-direction": "row",
    "align-items": "center",
    "justify-content": "center",
  });
}
