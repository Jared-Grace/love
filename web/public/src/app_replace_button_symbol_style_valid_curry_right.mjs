import { app_replace_button_symbol_style_valid } from "../../../love/public/src/app_replace_button_symbol_style_valid.mjs";
export function app_replace_button_symbol_style_valid_curry_right(valid) {
  let lambda = function app_replace_button_symbol_style_valid_curried_result(
    sb,
  ) {
    let r = app_replace_button_symbol_style_valid(sb, valid);
    return r;
  };
  return lambda;
}
