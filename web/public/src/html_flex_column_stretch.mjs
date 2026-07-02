import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function html_flex_column_stretch(column) {
  html_style_assign(column, {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  });
}
