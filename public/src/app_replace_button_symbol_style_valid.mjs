import { html_margin } from "../../../love/public/src/html_margin.mjs";
import { html_style_background_color_set_if } from "../../../love/public/src/html_style_background_color_set_if.mjs";
import { html_style_font_color_set_if } from "../../../love/public/src/html_style_font_color_set_if.mjs";
import { html_enable_if } from "../../../love/public/src/html_enable_if.mjs";
export function app_replace_button_symbol_style_valid(sb, valid) {
  html_margin(b, value);
  html_enable_if(sb, valid);
  html_style_background_color_set_if(sb, valid, "#00b400ff", "#1e6c1eff");
  html_style_font_color_set_if(sb, valid, "white", "#b9fcb9ff");
}
