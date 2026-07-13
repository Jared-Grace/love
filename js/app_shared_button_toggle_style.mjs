import { app_shared_button_selected_background_color } from "./app_shared_button_selected_background_color.mjs";
import { app_shared_button_uncolored_background_color } from "./app_shared_button_uncolored_background_color.mjs";
import { app_shared_button_font_color } from "./app_shared_button_font_color.mjs";
import { html_style_background_color_set_if_else } from "./html_style_background_color_set_if_else.mjs";
import { html_font_color_set_if } from "./html_font_color_set_if.mjs";
export function app_shared_button_toggle_style(chosen, component) {
  let chosen_color = app_shared_button_selected_background_color();
  let unchosen_color = app_shared_button_uncolored_background_color();
  html_style_background_color_set_if_else(
    chosen,
    component,
    chosen_color,
    unchosen_color,
  );
  let chosen_font = app_shared_button_font_color();
  html_font_color_set_if(chosen, component, chosen_font, "black");
}
