import { app_code_container_generic } from "../../../love/public/src/app_code_container_generic.mjs";
import { html_style_background_color_black } from "../../../love/public/src/html_style_background_color_black.mjs";
export function app_code_container_dark(parent) {
  let container = app_code_container_generic(parent);
  html_style_background_color_black(container);
  return container;
}
