import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { example_card_container_dom } from "./example_card_container_dom.mjs";
import { example_card_title_note_dom } from "./example_card_title_note_dom.mjs";
import { example_label_dom } from "./example_label_dom.mjs";
import { example_chip_dom } from "./example_chip_dom.mjs";
import { example_code_block_dom } from "./example_code_block_dom.mjs";
import { example_arrow_dom } from "./example_arrow_dom.mjs";
import { example_before_dom } from "./example_before_dom.mjs";
import { example_command_text } from "./example_command_text.mjs";
// A transform example as DOM: title, note, function chip, (derived) command
// chip, then before -> arrow -> after stacked. Built with shared style fns.
export function example_transform_card_dom(parent, example) {
  let title = property_get(example, "title");
  let note = property_get(example, "note");
  let fn = property_get(example, "fn");
  let alias = property_get(example, "alias");
  let args = property_get(example, "args");
  let before = property_get(example, "before");
  let after = property_get(example, "after");
  let card = example_card_container_dom(parent);
  example_card_title_note_dom(card, title, note, alias);
  example_label_dom(card, "function");
  example_chip_dom(card, fn);
  if (alias) {
    example_label_dom(card, "command");
    example_chip_dom(card, example_command_text(alias, args));
  }
  let io = html_div(card);
  html_style_set(io, "display", "flex");
  html_style_set(io, "flex-direction", "column");
  html_style_set(io, "gap", "0.6rem");
  html_style_set(io, "margin-top", "0.75rem");
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
