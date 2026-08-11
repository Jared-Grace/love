import { arguments_assert } from "./arguments_assert.mjs";
import { list_get_property } from "./list_get_property.mjs";
import { add_1 } from "./add_1.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { html_style_margin_bottom } from "./html_style_margin_bottom.mjs";
import { html_text_align } from "./html_text_align.mjs";
export function examples_menu_dom_example_button(
  index_example,
  examples,
  on_select,
  parent,
) {
  arguments_assert(arguments, 4);
  let title = list_get_property(examples, index_example, "title");
  let a = add_1(index_example);
  let label = text_combine_multiple([a, ". ", title]);
  function on_click() {
    on_select(index_example);
  }
  let button = app_shared_button_wide(parent, label, on_click);
  html_style_margin_bottom(button, "0.5rem");
  html_text_align(button, "left");
}
