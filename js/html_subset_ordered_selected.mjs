import { list_size } from "./list_size.mjs";
import { html_div } from "./html_div.mjs";
import { html_display_inline_block } from "./html_display_inline_block.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_subset_ordered_row } from "./html_subset_ordered_row.mjs";
export function html_subset_ordered_selected(
  parent,
  chosen,
  name_property,
  changed,
) {
  ("center the list as a block but keep rows left-aligned so the up and down arrows line up in columns");
  let container = html_div(parent);
  html_display_inline_block(container);
  html_style_set(container, "text-align", "left");
  let size = list_size(chosen);
  for (let i = 0; i < size; i++) {
    html_subset_ordered_row(container, chosen, i, name_property, changed);
  }
}
