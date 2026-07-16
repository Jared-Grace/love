import { list_get } from "../../love/js/list_get.mjs";
import { list_size } from "../../love/js/list_size.mjs";
import { subtract } from "../../love/js/subtract.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { list_swap_at } from "../../love/js/list_swap_at.mjs";
import { html_div } from "../../love/js/html_div.mjs";
import { html_span_text } from "../../love/js/html_span_text.mjs";
import { html_display_flex } from "../../love/js/html_display_flex.mjs";
import { html_width_full } from "../../love/js/html_width_full.mjs";
import { html_style_set } from "../../love/js/html_style_set.mjs";
import { app_shared_button } from "../../love/js/app_shared_button.mjs";
import { app_shared_spaced_small_gap } from "../../love/js/app_shared_spaced_small_gap.mjs";
import { emoji_arrow_up } from "../../love/js/emoji_arrow_up.mjs";
import { emoji_arrow_down } from "../../love/js/emoji_arrow_down.mjs";
import { html_visibility_hidden } from "../../love/js/html_visibility_hidden.mjs";
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
  html_display_flex(row);
  html_width_full(row);
  function up() {
    list_swap_at(chosen, i, subtract(i, 1));
    changed();
  }
  function down() {
    list_swap_at(chosen, i, i + 1);
    changed();
  }
  ("split each row at the card's horizontal center: the arrows fill the left half and hug the center, the name fills the right half and starts at the center, so adding a longer language name grows rightward and never shifts the arrows");
  let arrows = html_div(row);
  html_style_set(arrows, "flex", "1 1 0");
  html_display_flex(arrows);
  html_style_set(arrows, "justify-content", "flex-end");
  let up_button = app_shared_button(arrows, emoji_arrow_up(), up);
  if (i === 0) {
    html_visibility_hidden(up_button);
  }
  let down_button = app_shared_button(arrows, emoji_arrow_down(), down);
  if (i === last) {
    html_visibility_hidden(down_button);
  }
  let label = html_div(row);
  html_style_set(label, "flex", "1 1 0");
  html_style_set(label, "text-align", "left");
  html_style_set(label, "padding-left", app_shared_spaced_small_gap());
  html_span_text(label, name);
  return row;
}
