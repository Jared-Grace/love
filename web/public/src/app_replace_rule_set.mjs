import { html_enable_if } from "./html_enable_if.mjs";
import { html_text_set_if } from "./html_text_set_if.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_style_set_or_remove } from "./html_style_set_or_remove.mjs";
import { each_index } from "./each_index.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { each } from "./each.mjs";
import { html_p } from "./html_p.mjs";
import { html_disable } from "./html_disable.mjs";
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
  let label_symbols = html_p(root);
  let { start } = item;
  let current = storage_local_initialize_context(
    context,
    "rule_set_start",
    start,
  );
  let index_selected = null;
  let current_list = string_split_empty(current);
  function lambda2(letter, index) {
    function lambda5() {
      if (index_selected === index) {
        index_selected = null;
      } else {
        index_selected = index;
      }
      refresh();
    }
    let b = html_button(root, letter, lambda5);
    return b;
  }
  let symbols_buttons = list_map_index(current_list, lambda2);
  let label_rules = html_p(root);
  let { rules } = item;
  let mapped = list_map(rules, app_replace_rule_parse);
  function lambda(rule) {
    let left = object_property_get(rule, "left");
    let right = object_property_get(rule, "right");
    let right_joined = list_join_space(right);
    let left_joined = list_join_space(left);
    let text = left_joined + " ↦ " + right_joined;
    function lambda3() {
      let left = object_property_get(rule, "left");
      index_selected;
    }
    let b = html_button(root, text, lambda3);
    html_disable(b);
    return b;
  }
  let rules_buttons = list_map(mapped, lambda);
  refresh();
  function refresh() {
    let nn = null_not_is(index_selected);
    html_text_set_if(nn, "Choose a rule:", "Rules:", label_rules);
    html_text_set_if(nn, "Symbols:", "Choose a symbol:", label_symbols);
    function lambda6(component) {
      let v = html_enable_if(component, nn);
      return v;
    }
    each(rules_buttons, lambda6);
    function lambda4(symbols_button, index2) {
      html_style_set_or_remove(
        index2 === index_selected,
        symbols_button,
        "background-color",
        "lightgreen",
      );
    }
    each_index(symbols_buttons, lambda4);
  }
  refresh();
  marker("1");
}
