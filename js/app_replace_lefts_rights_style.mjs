import { each_nested } from "./each_nested.mjs";
import { app_replace_button_symbol_style_valid_if_curried_right } from "./app_replace_button_symbol_style_valid_if_curried_right.mjs";
import { list_map_property_get } from "./list_map_property_get.mjs";
export function app_replace_lefts_rights_style(rb, enabled, solved) {
  let properties = ["rights", "lefts"];
  let list = list_map_property_get(properties, rb);
  let lambda = app_replace_button_symbol_style_valid_if_curried_right(
    enabled,
    solved,
  );
  each_nested(list, lambda);
}
