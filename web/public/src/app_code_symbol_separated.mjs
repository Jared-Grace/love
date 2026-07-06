import { html_style_margin_top } from "../../../love/public/src/html_style_margin_top.mjs";
import { app_code_symbol_generic } from "../../../love/public/src/app_code_symbol_generic.mjs";
export function app_code_symbol_separated(parent, d) {
  const color_background = "#444";
  const color_box_shadow = "#777";
  let s = app_code_symbol_generic(
    parent,
    d,
    color_background,
    color_box_shadow,
  );
  html_style_margin_top(s, "0.25em");
  return s;
}
