import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { example_label_dom } from "./example_label_dom.mjs";
("One side of a card's body: a min-width:0 column (so long code can shrink instead of");
("overflowing) under its BEFORE or AFTER label. The caller fills it with a code block or a");
("file column. Returns the column.");
export function example_labeled_column_dom(parent, label) {
  let column = html_div(parent);
  html_style_set(column, "min-width", "0");
  example_label_dom(column, label);
  return column;
}
