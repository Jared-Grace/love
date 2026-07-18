import { property_get } from "./property_get.mjs";
import { html_escape } from "./html_escape.mjs";
import { html_code_element } from "./html_code_element.mjs";
import { example_code_block_html } from "./example_code_block_html.mjs";
import { example_before_shown } from "./example_before_shown.mjs";
import { example_io_column_html } from "./example_io_column_html.mjs";
import { example_arrow_svg } from "./example_arrow_svg.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function example_transform_html(example) {
  let title = property_get(example, "title");
  let note = property_get(example, "note");
  let command = property_get(example, "command");
  let before = property_get(example, "before");
  let after = property_get(example, "after");
  let heading = html_code_element("h2", {}, html_escape(title));
  let note_html = html_code_element("p", { class: "note" }, html_escape(note));
  let command_code = html_code_element("code", {}, html_escape(command));
  let command_html = html_code_element(
    "div",
    { class: "command" },
    command_code,
  );
  let before_block = example_code_block_html(
    example_before_shown(before),
    "before",
  );
  let arrow = html_code_element("div", { class: "arrow" }, example_arrow_svg());
  let after_block = example_code_block_html(after, "after");
  let before_col = example_io_column_html("before", before_block);
  let after_col = example_io_column_html("after", after_block);
  let io_inner = text_combine_multiple([before_col, arrow, after_col]);
  let io = html_code_element("div", { class: "io" }, io_inner);
  let inner = text_combine_multiple([heading, note_html, command_html, io]);
  let r = html_code_element("article", { class: "example" }, inner);
  return r;
}
