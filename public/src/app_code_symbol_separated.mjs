import { html_margin } from "../../../love/public/src/html_margin.mjs";
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
  html_margin(s, "0.1em");
  return s;
}
