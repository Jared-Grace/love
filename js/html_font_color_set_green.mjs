import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_shared_button_background } from "./app_shared_button_background.mjs";
export function html_font_color_set_green(div) {
  let c = app_shared_button_background();
  html_font_color_set(div, "#00ad28ff");
}
