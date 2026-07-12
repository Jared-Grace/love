import { app_code_symbol_separated_margin_y } from "./app_code_symbol_separated_margin_y.mjs";
import { app_code_symbol_generic } from "./app_code_symbol_generic.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
export function app_code_symbol_separated(parent, symbol) {
  let color_background = "rgba(255, 255, 255, 0.266667)";
  let color_box_shadow = "rgba(255, 255, 255, 0.466667)";
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
