import { app_replace_button } from "./app_replace_button.mjs";
import { app_replace_button_rule_background_color } from "./app_replace_button_rule_background_color.mjs";
import { app_shared_button_background } from "./app_shared_button_background.mjs";
import { app_shared_button_font_color } from "./app_shared_button_font_color.mjs";
import { html_style_background_color_set_if_else } from "./html_style_background_color_set_if_else.mjs";
import { html_font_color_set_if } from "./html_font_color_set_if.mjs";
export function html_button_toggle(parent, text, on, lambda) {
  let button = app_replace_button(parent, text, lambda);
  let on_color = app_shared_button_background();
  let off_color = app_replace_button_rule_background_color();
  html_style_background_color_set_if_else(on, button, on_color, off_color);
  let on_font = app_shared_button_font_color();
  html_font_color_set_if(on, button, on_font, "black");
  return button;
}
