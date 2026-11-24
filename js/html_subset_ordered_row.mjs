import { html_style_justify_self } from "./html_style_justify_self.mjs";
import { list_get_property } from "./list_get_property.mjs";
import { list_size_less_1 } from "./list_size_less_1.mjs";
import { subtract } from "./subtract.mjs";
import { list_swap_at } from "./list_swap_at.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_display_flex } from "./html_display_flex.mjs";
import { emoji_arrow_up } from "./emoji_arrow_up.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { equal } from "./equal.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { emoji_arrow_down } from "./emoji_arrow_down.mjs";
import { html_text_align } from "./html_text_align.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
import { emoji_x_red } from "./emoji_x_red.mjs";
export function html_subset_ordered_row(
  parent,
  chosen,
  i,
  name_property,
  changed,
) {
  let name = list_get_property(chosen, i, name_property);
  let last = list_size_less_1(chosen);
  ("the row's parts go straight into the list's grid, one cell each, so every row shares the same columns; the arrows are put in the first column, which starts each row on a line of its own");
  function up() {
    let index_b = subtract(i, 1);
    list_swap_at(chosen, i, index_b);
    changed();
  }
  function down() {
    list_swap_at(chosen, i, i + 1);
    changed();
  }
  let arrows = html_div(parent);
  html_style_set(arrows, "grid-column", "1");
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
  let label = html_div(parent);
  html_text_align(label, "left");
  let style_value = app_shared_spaced_small_gap();
  html_style_set(label, "padding-left", style_value);
  html_span_text(label, name);
  ("a cross takes that one out of the chosen, the same as unticking it above, so a reader ordering the list need not go back up to drop one. it sits in the column after the names: the crosses stand in one column just past the longest name, the name sits between a cross and the arrows so a thumb meant for an arrow does not take a language away, and the end of a row is where taking something away is looked for. it is only offered while two or more are chosen, so the last one can never be taken away from here.");
  let multiple = list_multiple_is(chosen);
  if (multiple) {
    function remove() {
      list_remove_at(chosen, i);
      changed();
    }
    let text3 = emoji_x_red();
    let remove_button = app_shared_button(parent, text3, remove);
    html_style_set(remove_button, "margin-left", style_value);
    html_style_justify_self(remove_button, "start");
  }
  return label;
}
