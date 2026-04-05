import { app_karate_button_font_color } from "../../../karate_code/public/src/app_karate_button_font_color.mjs";
import { app_shared_button_background } from "../../../love/public/src/app_shared_button_background.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function app_shared_button_screen_green_style_assign(component) {
  html_style_assign(component, {
    "background-color": app_shared_button_background(),
    color: app_karate_button_font_color(),
  });
}
