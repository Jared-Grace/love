import { app_code_symbol_separated_margin_y } from "../../../love/public/src/app_code_symbol_separated_margin_y.mjs";
import { app_code_symbol_generic } from "../../../love/public/src/app_code_symbol_generic.mjs";
import { html_style_margin_y } from "../../../love/public/src/html_style_margin_y.mjs";
export function app_code_symbol_separated(parent, symbol) {
  const color_background = "#444";
  const color_box_shadow = "#777";
  let s = app_code_symbol_generic(
    parent,
    symbol,
    color_background,
    color_box_shadow,
  );
  let value = app_code_symbol_separated_margin_y();
  html_style_margin_y(s, value);
  return s;
}
