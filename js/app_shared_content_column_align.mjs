import { app_shared_column_max_width } from "./app_shared_column_max_width.mjs";
import { app_shared_content_edge_gap } from "./app_shared_content_edge_gap.mjs";
import { app_shared_content_center_padding_value } from "./app_shared_content_center_padding_value.mjs";
import { html_style_margin_x } from "./html_style_margin_x.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_shared_content_column_align(element) {
  "give a full-width element the same left and right edges as the reading column beside it. For the one that sits OUTSIDE a screen's padded body - added to the page root rather than into the content - so no padding above it has already placed it, and left alone it runs to the window edge while everything above it stops well short.";
  "the twin next door pads a full-width box so its children land in the column; this takes the element itself in, by holding the same length out of each side as a margin and narrowing the width by both. Auto side margins would centre it too, but on the actual box rather than on the viewport, so a scrollbar leaves it half a scrollbar off from the column above - which is the whole thing this is here to avoid.";
  let column = app_shared_column_max_width();
  let gap = app_shared_content_edge_gap();
  let inset = app_shared_content_center_padding_value(column, gap);
  html_style_margin_x(element, inset);
  let width = text_combine_multiple(["calc(100% - 2 * ", inset, ")"]);
  html_style_set(element, "width", width);
}
