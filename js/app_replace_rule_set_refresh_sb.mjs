import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { app_replace_button_symbol_style_valid_if } from "./app_replace_button_symbol_style_valid_if.mjs";
export function app_replace_rule_set_refresh_sb(sb, index, state) {
  let start_indices = property_get(state, "start_indices");
  let index_selected = property_get(state, "index_selected");
  let success = property_get(state, "success");
  let includes = list_includes(start_indices, index);
  let valid = index_selected !== null && includes;
  app_replace_button_symbol_style_valid_if(sb, valid, success);
}
