import { app_replace_button_symbol_style } from "../../../love/public/src/app_replace_button_symbol_style.mjs";
import { html_style_background_color_set } from "../../../love/public/src/html_style_background_color_set.mjs";
import { app_replace_button_rule_background_color } from "../../../love/public/src/app_replace_button_rule_background_color.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export function app_replace_button(parent, text, lambda) {
  let b = html_button(parent, text, lambda);
  app_replace_button_symbol_style(b);
  let c = app_replace_button_rule_background_color();
  html_style_background_color_set(b, c);
}
