import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_g_arcs_row(column) {
  "A row of presses across the top of the bench, wrapping onto a second line when there are more of them than fit.";
  "THE TWO CHOOSER ROWS ARE ONE SHAPE WRITTEN ONCE. A chapter row and a person row that drifted apart would read as two different kinds of control when they are one kind asked twice.";
  let row = html_div(column);
  let style = {
    display: "flex",
    "flex-wrap": "wrap",
    gap: "0.4rem",
    "justify-content": "center",
  };
  html_style_assign(row, style);
  return row;
}
