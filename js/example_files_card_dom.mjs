import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { example_card_container_dom } from "./example_card_container_dom.mjs";
import { example_card_title_note_dom } from "./example_card_title_note_dom.mjs";
import { example_label_dom } from "./example_label_dom.mjs";
import { example_chip_dom } from "./example_chip_dom.mjs";
import { example_function_chip_dom } from "./example_function_chip_dom.mjs";
import { example_arrow_dom } from "./example_arrow_dom.mjs";
import { example_command_text } from "./example_command_text.mjs";
import { example_files_column_dom } from "./example_files_column_dom.mjs";
import { example_refusal_dom } from "./example_refusal_dom.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
("A multi-file example as DOM: same header as a transform card, but before/after are");
("each a COLUMN of named files (a rename adds/moves files, which one code block cannot");
("show). A GUARD (example.refuses) shows the before file-set + a red refusal line, no");
("after — nothing changes when the tool refuses. The DOM twin has no string-renderer.");
export function example_files_card_dom(parent, example) {
  let title = property_get(example, "title");
  let note = property_get(example, "note");
  let fn = property_get(example, "fn");
  let alias = property_get(example, "alias");
  let args = property_get(example, "args");
  let before = property_get(example, "before");
  let refuses = property_get_or_null(example, "refuses");
  let expect_text = property_get_or_null(example, "expectText");
  let after = refuses ? null : property_get(example, "after");
  let card = example_card_container_dom(parent);
  example_card_title_note_dom(card, title, note, alias);
  example_label_dom(card, "function");
  example_function_chip_dom(card, fn);
  if (alias) {
    example_label_dom(card, "command");
    example_chip_dom(card, example_command_text(alias, args));
  }
  let io = html_div(card);
  html_style_set(io, "display", "flex");
  html_style_set(io, "flex-direction", "column");
  html_style_set(io, "gap", "0.3rem");
  let before_column = html_div(io);
  html_style_set(before_column, "min-width", "0");
  example_label_dom(before_column, "before");
  example_files_column_dom(before_column, before);
  if (refuses) {
    example_refusal_dom(io, expect_text);
    return card;
  }
  example_arrow_dom(io);
  let after_column = html_div(io);
  html_style_set(after_column, "min-width", "0");
  example_label_dom(after_column, "after");
  example_files_column_dom(after_column, after);
  return card;
}
