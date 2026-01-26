import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function html_style_grid(shape, columns, rows) {
  html_style_assign(shape, {
    display: "inline-grid",
    "grid-template-columns": "repeat(" + columns + ", 1fr)",
    "grid-template-rows": "repeat(" + rows + ", auto)",
    gap: "0",
  });
}
