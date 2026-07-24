import { property_get } from "./property_get.mjs";
import { example_card_header_dom } from "./example_card_header_dom.mjs";
import { example_io_column_dom } from "./example_io_column_dom.mjs";
import { example_labeled_column_dom } from "./example_labeled_column_dom.mjs";
import { example_arrow_dom } from "./example_arrow_dom.mjs";
import { example_files_column_dom } from "./example_files_column_dom.mjs";
import { example_refusal_dom } from "./example_refusal_dom.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
("A multi-file example as DOM: same header as a transform card, but before/after are");
("each a COLUMN of named files (a rename adds/moves files, which one code block cannot");
("show). A GUARD (example.refuses) shows the before file-set + a red refusal line, no");
("after — nothing changes when the tool refuses. The DOM twin has no string-renderer.");
export function example_files_card_dom(parent, example) {
  let before = property_get(example, "before");
  let refuses = property_get_or_null(example, "refuses");
  let expect_text = property_get_or_null(example, "expectText");
  let after = refuses ? null : property_get(example, "after");
  let card = example_card_header_dom(parent, example);
  let io = example_io_column_dom(card);
  let before_column = example_labeled_column_dom(io, "before");
  example_files_column_dom(before_column, before);
  if (refuses) {
    example_refusal_dom(io, expect_text);
    return card;
  }
  example_arrow_dom(io);
  let after_column = example_labeled_column_dom(io, "after");
  example_files_column_dom(after_column, after);
  return card;
}
