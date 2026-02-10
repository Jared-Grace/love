import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_style_background_color } from "../../../love/public/src/html_style_background_color.mjs";
import { html_enable_if } from "../../../love/public/src/html_enable_if.mjs";
export function app_replace_button_symbol_style_valid(sb, valid) {
  let color_font = null;
  let color_bg = null;
  html_enable_if(sb, valid);
  if (valid) {
    color_bg = "#00b400ff";
    color_font = "white";
  } else {
    color_bg = "#1e6c1eff";
    color_font = "#b1e8b1ff";
  }
  html_style_background_color(sb, color_bg);
  html_font_color_set(sb, color_font);
}
