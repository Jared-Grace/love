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
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
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
  function up() {
    list_swap_at(chosen, i, subtract(i, 1));
    changed();
  }
  function down() {
    list_swap_at(chosen, i, i + 1);
    changed();
  }
  "arrows first as fixed left columns; hide (keep the space) at the ends so up/down and the names all stay aligned";
  let up_button = app_replace_button(row, emoji_arrow_up(), up);
  if (i === 0) {
    html_visibility_hidden(up_button);
  }
  let down_button = app_replace_button(row, emoji_arrow_down(), down);
  if (i === last) {
    html_visibility_hidden(down_button);
  }
  html_span_space(row);
  html_span_text(row, name);
  return row;
}
