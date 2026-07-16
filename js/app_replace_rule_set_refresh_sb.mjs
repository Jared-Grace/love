import { property_get } from "../../love/js/property_get.mjs";
import { list_includes } from "../../love/js/list_includes.mjs";
import { app_replace_symbol_tile_valid_if } from "../../love/js/app_replace_symbol_tile_valid_if.mjs";
export function app_replace_rule_set_refresh_sb(symbol_button, index, state) {
  let start_indices = property_get(state, "start_indices");
  let index_selected = property_get(state, "index_selected");
  let success = property_get(state, "success");
  let includes = list_includes(start_indices, index);
  let valid = index_selected !== null && includes;
  app_replace_symbol_tile_valid_if(symbol_button, valid, success);
}
