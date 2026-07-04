import { app_code_container_generic_style } from "../../../love/public/src/app_code_container_generic_style.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
export function app_code_container_generic(parent) {
  let container = html_div(parent);
  app_code_container_generic_style(container);
  return container;
}
