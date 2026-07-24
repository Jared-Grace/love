import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { example_card_header_dom } from "./example_card_header_dom.mjs";
import { example_label_dom } from "./example_label_dom.mjs";
import { example_code_block_dom } from "./example_code_block_dom.mjs";
import { example_arrow_dom } from "./example_arrow_dom.mjs";
import { example_before_dom } from "./example_before_dom.mjs";
("A transform example as DOM: the shared header, then before -> arrow -> after");
("stacked. Built with shared style fns.");
export function example_transform_card_dom(parent, example) {
  let before = property_get(example, "before");
  let after = property_get(example, "after");
  let card = example_card_header_dom(parent, example);
  let io = html_div(card);
  html_style_set(io, "display", "flex");
  html_style_set(io, "flex-direction", "column");
  html_style_set(io, "gap", "0.3rem");
  let before_column = html_div(io);
  html_style_set(before_column, "min-width", "0");
  example_label_dom(before_column, "before");
  example_before_dom(before_column, before);
  example_arrow_dom(io);
  let after_column = html_div(io);
  html_style_set(after_column, "min-width", "0");
  example_label_dom(after_column, "after");
  example_code_block_dom(after_column, after);
  return card;
}
