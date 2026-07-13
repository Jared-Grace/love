import { app_shared_style_control } from "./app_shared_style_control.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_border } from "./html_border.mjs";
import { app_shared_container_blue_border_color } from "./app_shared_container_blue_border_color.mjs";
export function app_shared_input_style(component) {
  app_shared_style_control(component);
  html_style_background_color_set(component, "white");
  html_border(component, "0.1em", app_shared_container_blue_border_color());
}
