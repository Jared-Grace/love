import { each_nested } from "../../../love/public/src/each_nested.mjs";
import { app_replace_button_symbol_style_valid_if_curry_right } from "../../../love/public/src/app_replace_button_symbol_style_valid_if_curry_right.mjs";
export function app_replace_button_symbol_style_valid_if_multiple_nested(
  list,
  valid,
) {
  let lambda4 = app_replace_button_symbol_style_valid_if_curry_right(valid);
  each_nested(list, lambda4);
}
