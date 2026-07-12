import { each } from "./each.mjs";
import { app_replace_button_symbol_style_valid_if_curried_right } from "./app_replace_button_symbol_style_valid_if_curried_right.mjs";
export function app_replace_button_symbol_style_valid_if_multiple(
  lists,
  valid,
) {
  let lambda = app_replace_button_symbol_style_valid_if_curried_right(valid);
  each(lists, lambda);
}
