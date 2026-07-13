import { html_style_assign } from "./html_style_assign.mjs";
export function html_flex_column_center(column) {
  html_style_assign(column, {
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
  });
}
