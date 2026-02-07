import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { app_karate_button_background } from "../../../karate_code/public/src/app_karate_button_background.mjs";
export function html_font_color_set_green(div) {
  let c = app_karate_button_background();
  html_font_color_set(div, c);
}
