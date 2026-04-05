import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { app_shared_button_background } from "../../../love/public/src/app_shared_button_background.mjs";
export function html_font_color_set_green(div) {
  let c = app_shared_button_background();
  html_font_color_set(div, "#00ad28ff");
}
