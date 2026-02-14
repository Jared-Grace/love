import { each_nested } from "../../../love/public/src/each_nested.mjs";
import { app_replace_button_symbol_style_valid_curry_right } from "../../../love/public/src/app_replace_button_symbol_style_valid_curry_right.mjs";
import { list_map_property_get } from "../../../love/public/src/list_map_property_get.mjs";
export function app_replace_lefts_rights_style(rb, enabled) {
  let properties = ["rights", "lefts"];
  let list = list_map_property_get(properties, rb);
  let lambda4 = app_replace_button_symbol_style_valid_curry_right(enabled);
  each_nested(list, lambda4);
}
