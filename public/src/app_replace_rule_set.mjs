import { app_replace_rule_parse } from "./app_replace_rule_parse.mjs";
import { list_map } from "./list_map.mjs";
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
  let mapped = list_map(rules, app_replace_rule_parse);
  let text = json_to(item);
  html_p_text(root, text);
  marker("1");
}
