import { html_value_set } from "../../../love/public/src/html_value_set.mjs";
import { html_style_background_color } from "../../../love/public/src/html_style_background_color.mjs";
import { app_a_control_style } from "../../../love/public/src/app_a_control_style.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { html_div_text_centered } from "../../../love/public/src/html_div_text_centered.mjs";
import { text_articled } from "../../../love/public/src/text_articled.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { html_focus } from "../../../love/public/src/html_focus.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { app_a_button_wide } from "../../../love/public/src/app_a_button_wide.mjs";
import { list_sort_text_alpha_size } from "../../../love/public/src/list_sort_text_alpha_size.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { html_on_input } from "../../../love/public/src/html_on_input.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { app_a_input } from "../../../love/public/src/app_a_input.mjs";
import { app_a_on_keydown_add } from "../../../love/public/src/app_a_on_keydown_add.mjs";
import { html_on_enter_lambda } from "../../../love/public/src/html_on_enter_lambda.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function app_a_list_chooser(context, noun, texts, lambda$text) {
  let root = object_property_get(context, "root");
  const articled = text_articled(noun);
  const text = "Choose " + articled + ":";
  let d = html_div_text_centered(root, text);
  app_a_control_style(d);
  html_style_background_color(d, "white");
  let filtered = null;
  async function on_enter() {
    let first = list_first(filtered);
    await f_name_select(first);
  }
  let on_keydown = html_on_enter_lambda(on_enter);
  let on_keydowns = app_a_on_keydown_add(context, on_keydown);
  let input = app_a_input(root);
  let f_names_div = html_div(root);
  function on_input() {
    let value = html_value_get(input);
    function lambda2(text) {
      let v3 = match(value, text);
      return v3;
    }
    filtered = list_filter(texts, lambda2);
    refresh();
    function match(s, target) {
      const escaped = s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
      let v2 = escaped.split("").join(".*");
      const regex = new RegExp(v2);
      let v = regex.test(target);
      return v;
    }
  }
  html_on_input(input, on_input);
  filtered = texts;
  refresh();
  function refresh() {
    html_clear(f_names_div);
    list_sort_text_alpha_size(filtered);
    function lambda(text) {
      async function lambda3() {
        await f_name_select(text);
      }
      app_a_button_wide(f_names_div, text, lambda3);
    }
    each(filtered, lambda);
  }
  html_focus(input);
  async function f_name_select(text) {
    list_remove(on_keydowns, on_keydown);
    await lambda$text(text);
  }
  function input_set(value) {
    html_value_set(input, value);
    on_input();
  }
  let v4 = {
    input_set,
  };
  return v4;
}
