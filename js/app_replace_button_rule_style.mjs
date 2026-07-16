import { html_border_none } from "../../love/js/html_border_none.mjs";
import { html_style_padding_y } from "../../love/js/html_style_padding_y.mjs";
import { app_shared_symbol_tile_style } from "../../love/js/app_shared_symbol_tile_style.mjs";
export function app_replace_button_rule_style(b) {
  app_shared_symbol_tile_style(b);
  html_style_padding_y(b, "0.3em");
  html_border_none(b);
}
