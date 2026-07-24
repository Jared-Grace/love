import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
("The vertical stack that holds a card's before -> arrow -> after body: a flex column with a");
("small gap. Both the transform card and the multi-file card build their body on it.");
export function example_io_column_dom(parent) {
  let io = html_div(parent);
  html_style_set(io, "display", "flex");
  html_style_set(io, "flex-direction", "column");
  html_style_set(io, "gap", "0.3rem");
  return io;
}
