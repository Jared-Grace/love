import { html_value_set } from "./html_value_set.mjs";
import { html_focus } from "./html_focus.mjs";
import { each } from "./each.mjs";
import { app_a_button_wide } from "./app_a_button_wide.mjs";
import { list_sort_text_alpha_size } from "./list_sort_text_alpha_size.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_on_input } from "./html_on_input.mjs";
import { list_filter_text_match_ordered } from "./list_filter_text_match_ordered.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_div } from "./html_div.mjs";
import { app_a_input } from "./app_a_input.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_a_control_style } from "./app_a_control_style.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { text_articled } from "./text_articled.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_a_list_chooser_generic(
  root,
  noun,
  texts,
  lambda$text,
  lambda$button$text,
) {
  let articled = text_articled(noun);
  let text = text_combine_multiple(["Choose ", articled, ":"]);
  let d = html_div_text_centered(root, text);
  app_a_control_style(d);
  html_style_background_color_set(d, "white");
  let filtered = null;
  let input = app_a_input(root);
  let f_names_div = html_div(root);
  function on_input() {
    let value = html_value_get(input);
    filtered = list_filter_text_match_ordered(texts, value);
    refresh();
    let r2 = filtered_get();
    return r2;
  }
  html_on_input(input, on_input);
  filtered = texts;
  refresh();
  function refresh() {
    html_clear(f_names_div);
    list_sort_text_alpha_size(filtered);
    function lambda(text) {
      async function on_click() {
        await lambda$text(text);
      }
      let b = app_a_button_wide(f_names_div, text, on_click);
      lambda$button$text(b, text);
    }
    each(filtered, lambda);
  }
  html_focus(input);
  function input_set(value) {
    html_value_set(input, value);
    on_input();
  }
  function filtered_get() {
    return filtered;
  }
  let r = {
    input_set,
    filtered_get,
  };
  return r;
}
