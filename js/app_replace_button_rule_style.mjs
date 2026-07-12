import { html_border_none } from "./html_border_none.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { app_replace_button_symbol_style } from "./app_replace_button_symbol_style.mjs";
export function app_replace_button_rule_style(b) {
  app_replace_button_symbol_style(b);
  html_style_padding_y(b, "0.3em");
  html_border_none(b);
}
