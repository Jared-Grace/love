import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
import { property_get } from "./property_get.mjs";
import { list_swap_at } from "./list_swap_at.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_space } from "./html_span_space.mjs";
import { app_replace_button } from "./app_replace_button.mjs";
import { emoji_arrow_up } from "./emoji_arrow_up.mjs";
import { emoji_arrow_down } from "./emoji_arrow_down.mjs";
export function html_subset_ordered_row(
  parent,
  chosen,
  i,
  name_property,
  changed,
) {
  let item = list_get(chosen, i);
  let name = property_get(item, name_property);
  let last = subtract(list_size(chosen), 1);
  let row = html_div(parent);
  html_span_text(row, name);
  html_span_space(row);
  function up() {
    list_swap_at(chosen, i, subtract(i, 1));
    changed();
  }
  function down() {
    list_swap_at(chosen, i, i + 1);
    changed();
  }
  if (i > 0) {
    app_replace_button(row, emoji_arrow_up(), up);
  }
  if (i < last) {
    app_replace_button(row, emoji_arrow_down(), down);
  }
  return row;
}
