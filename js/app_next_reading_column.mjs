import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_mobile_default_font_size } from "./app_shared_mobile_default_font_size.mjs";
import { html_margin_0 } from "./html_margin_0.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_content_column_pad } from "./app_shared_content_column_pad.mjs";
import { app_shared_content_edge_gap } from "./app_shared_content_edge_gap.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
export function app_next_reading_column(context) {
  arguments_assert(arguments, 1);
  let root = app_shared_mobile_default_font_size(context);
  html_margin_0(root);
  ("The column is held by a box made fresh for this page rather than by the page root, which outlives it - the reason is written where the padding is done.");
  let content = html_div(root);
  app_shared_content_column_pad(content);
  ("The reading is held off the top and bottom edges by the same gap that holds it off the sides, so the first line is not sitting against the frame of the window. The reader has a bar over its text doing that work; this page has nothing above the reading, and left alone the first line touches the edge.");
  let value = app_shared_content_edge_gap();
  html_style_padding_y(content, value);
  return content;
}
