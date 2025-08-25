import { list_map_index } from "./list_map_index.mjs";
import { each } from "./each.mjs";
import { html_enable } from "./html_enable.mjs";
import { html_p } from "./html_p.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_disable } from "./html_disable.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
import { storage_local_initialize_context } from "./storage_local_initialize_context.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_button } from "./html_button.mjs";
import { app_replace_rule_parse } from "./app_replace_rule_parse.mjs";
import { list_map } from "./list_map.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { list_get } from "./list_get.mjs";
import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
import { emoji_home } from "./emoji_home.mjs";
import { html_button_screen } from "./html_button_screen.mjs";
import { marker } from "./marker.mjs";
export function app_replace_rule_set(context) {
  let { root } = context;
  html_button_screen(root, emoji_home() + "Home", context, "home");
  let index = storage_local_get_context(context, "rule_set_index");
  let rule_sets = app_replace_rule_sets();
  let item = list_get(rule_sets, index);
  let { name } = item;
  html_p_text(root, "Rule set: " + name);
  html_p_text(root, "Choose a symbol:");
  let { start } = item;
  let current = storage_local_initialize_context(
    context,
    "rule_set_start",
    start,
  );
  let index_selected = null;
  let current_list = string_split_empty(current);
  function lambda2(letter, index) {
    let b = null;
    function lambda5() {
      html_style_set(b, "background-color", "lightgreen");
      index_selected = index;
      refresh();
    }
    b = html_button(root, letter, lambda5);
    return b;
  }
  let mapped2 = list_map_index(list, mapper);
  list_map_index(current_list, lambda2);
  let l = html_p(root);
  refresh();
  let { rules } = item;
  let mapped = list_map(rules, app_replace_rule_parse);
  function lambda(rule) {
    let left = object_property_get(rule, "left");
    let right = object_property_get(rule, "right");
    let right_joined = list_join_space(right);
    let left_joined = list_join_space(left);
    let text = left_joined + " ↦ " + right_joined;
    function lambda3() {}
    let b = html_button(root, text, lambda3);
    html_disable(b);
  }
  let rules_buttons = list_map(mapped, lambda);
  function refresh() {
    let label = null;
    let fn = null;
    if (index_selected) {
      label = "Choose a rule:";
      fn = html_enable;
    } else {
      label = "Rules:";
      fn = html_disable;
    }
    html_text_set(l, label);
    each(rules_buttons, fn);
  }
  refresh();
  marker("1");
}
