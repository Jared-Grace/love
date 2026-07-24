import { property_get } from "./property_get.mjs";
import { example_card_header_dom } from "./example_card_header_dom.mjs";
import { example_io_column_dom } from "./example_io_column_dom.mjs";
import { example_labeled_column_dom } from "./example_labeled_column_dom.mjs";
import { example_code_block_dom } from "./example_code_block_dom.mjs";
import { example_arrow_dom } from "./example_arrow_dom.mjs";
import { example_before_dom } from "./example_before_dom.mjs";
("A transform example as DOM: the shared header, then before -> arrow -> after");
("stacked. Built with shared style fns.");
export function example_transform_card_dom(parent, example) {
  let before = property_get(example, "before");
  let after = property_get(example, "after");
  let card = example_card_header_dom(parent, example);
  let io = example_io_column_dom(card);
  let before_column = example_labeled_column_dom(io, "before");
  example_before_dom(before_column, before);
  example_arrow_dom(io);
  let after_column = example_labeled_column_dom(io, "after");
  example_code_block_dom(after_column, after);
  return card;
}
