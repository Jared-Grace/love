import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_style_grid(shape, columns, rows) {
  html_style_assign(shape, {
    display: "inline-grid",
    "grid-template-columns": text_combine_multiple([
      "repeat(",
      columns,
      ", auto)",
    ]),
    gap: "0",
    "vertical-align": "top",
  });
}
