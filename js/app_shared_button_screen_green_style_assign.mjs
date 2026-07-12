import { app_shared_button_font_color } from "./app_shared_button_font_color.mjs";
import { app_shared_button_background } from "./app_shared_button_background.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_shared_button_screen_green_style_assign(component) {
  html_style_assign(component, {
    "background-color": app_shared_button_background(),
    color: app_shared_button_font_color(),
  });
}
