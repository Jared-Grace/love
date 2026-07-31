import { list_size_less_1 } from "./list_size_less_1.mjs";
import { html_text_align } from "./html_text_align.mjs";
import { html_style_flex } from "./html_style_flex.mjs";
import { equal } from "./equal.mjs";
import { list_get_property } from "./list_get_property.mjs";
import { subtract } from "./subtract.mjs";
import { list_swap_at } from "./list_swap_at.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_display_flex } from "./html_display_flex.mjs";
import { html_width_full } from "./html_width_full.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
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
  let name = list_get_property(chosen, i, name_property);
  let last = list_size_less_1(chosen);
  let row = html_div(parent);
  html_display_flex(row);
  html_width_full(row);
  function up() {
    let index_b = subtract(i, 1);
    list_swap_at(chosen, i, index_b);
    changed();
  }
  function down() {
    list_swap_at(chosen, i, i + 1);
    changed();
  }
  ("split each row at the card's horizontal center: the arrows fill the left half and hug the center, the name fills the right half and starts at the center, so adding a longer language name grows rightward and never shifts the arrows");
  let arrows = html_div(row);
  html_style_flex(arrows, "1 1 0");
  html_display_flex(arrows);
  html_style_set(arrows, "justify-content", "flex-end");
  let text = emoji_arrow_up();
  let up_button = app_shared_button(arrows, text, up);
  if (equal(i, 0)) {
    html_visibility_hidden(up_button);
  }
  let text2 = emoji_arrow_down();
  let down_button = app_shared_button(arrows, text2, down);
  if (equal(i, last)) {
    html_visibility_hidden(down_button);
  }
  let label = html_div(row);
  html_style_flex(label, "1 1 0");
  html_text_align(label, "left");
  let style_value = app_shared_spaced_small_gap();
  html_style_set(label, "padding-left", style_value);
  html_span_text(label, name);
  return row;
}
