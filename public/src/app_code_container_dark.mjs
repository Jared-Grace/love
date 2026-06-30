import { app_code_container_generic } from "../../../love/public/src/app_code_container_generic.mjs";
import { html_style_background_color_black } from "../../../love/public/src/html_style_background_color_black.mjs";
export function app_code_container_dark(parent) {
  let color_background_set = html_style_background_color_black;
  let div3 = app_code_container_generic(parent, color_background_set);
  return div3;
}
