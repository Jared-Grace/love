import { html_style_assign } from "./html_style_assign.mjs";
export function html_flex_column_gap(component, value) {
  html_style_assign(component, {
    display: "flex",
    "flex-direction": "column",
    gap: value,
  });
}
