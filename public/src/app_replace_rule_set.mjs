import { list_map } from "./list_map.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_take } from "./list_take.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { list_get } from "./list_get.mjs";
import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
import { emoji_home } from "./emoji_home.mjs";
import { html_button_screen } from "./html_button_screen.mjs";
import { marker } from "./marker.mjs";
import { json_to } from "./json_to.mjs";
export function app_replace_rule_set(context) {
  let { root } = context;
  html_button_screen(root, emoji_home() + "Home", context, "home");
  let index = storage_local_get_context(context, "rule_set_index");
  let rule_sets = app_replace_rule_sets();
  let item = list_get(rule_sets, index);
  let { rules } = item;
  function lambda(rule) {
    let split = string_split_space(rule);
    let middle = list_index_of(split, ">");
    let left = list_take(split, middle);
    let right = list_skip(split, middle + 1);
    let v = {
      left,
      right,
    };
    return v;
  }
  let mapped = list_map(rules, lambda);
  let text = json_to(item);
  html_p_text(root, text);
  marker("1");
}
