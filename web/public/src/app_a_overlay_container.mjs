import { html_style_background_color } from "../../../love/public/src/html_style_background_color.mjs";
import { app_a_control_style } from "../../../love/public/src/app_a_control_style.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
export function app_a_overlay_container(overlay) {
  let div = html_div(overlay);
  app_a_control_style(div);
  html_style_background_color(div, "white");
  return div;
}
