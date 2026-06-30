import { app_replace_button_symbol_style_box_shadow_value } from "../../../love/public/src/app_replace_button_symbol_style_box_shadow_value.mjs";
import { html_style_set_or_remove } from "../../../love/public/src/html_style_set_or_remove.mjs";
export function app_replace_button_symbol_style_box_shadow(valid, sb, h) {
  let style_value = app_replace_button_symbol_style_box_shadow_value(h);
  html_style_set_or_remove(valid, sb, "box-shadow", style_value);
}
