import { html_style_background_color_set } from "../../../love/public/src/html_style_background_color_set.mjs";
import { app_code_container_generic } from "../../../love/public/src/app_code_container_generic.mjs";
export function app_code_container_light_blue(parent) {
  let container = app_code_container_generic(parent);
  html_style_background_color_set(container, "rgb(209, 231, 253)");
  return container;
}
