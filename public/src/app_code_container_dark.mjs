import { app_code_container_generic_style } from "../../../love/public/src/app_code_container_generic_style.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_style_background_color_black } from "../../../love/public/src/html_style_background_color_black.mjs";
export function app_code_container_dark(parent) {
  let container2 = html_div(parent);
  app_code_container_generic_style(container2);
  let container = container2;
  html_style_background_color_black(container);
  return container;
}
