import { html_flex_column_gap } from "./html_flex_column_gap.mjs";
import { html_div } from "./html_div.mjs";
("The vertical stack that holds a card's before -> arrow -> after body: a flex column with a");
("small gap. Both the transform card and the multi-file card build their body on it.");
export function example_io_column_dom(parent) {
  let io = html_div(parent);
  html_flex_column_gap(io, "0.3rem");
  return io;
}
