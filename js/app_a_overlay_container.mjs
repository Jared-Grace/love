import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_a_control_style } from "./app_a_control_style.mjs";
import { html_div } from "./html_div.mjs";
export function app_a_overlay_container(overlay) {
  let div = html_div(overlay);
  app_a_control_style(div);
  html_style_background_color_set(div, "white");
  return div;
}
