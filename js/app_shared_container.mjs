import { app_shared_container_background_color } from "./app_shared_container_background_color.mjs";
import { app_shared_container_base } from "./app_shared_container_base.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_container(parent) {
  let div = app_shared_container_base(parent);
  let color = text_combine(app_shared_container_background_color(), "ff");
  html_style_background_color_set(div, color);
  return div;
}
