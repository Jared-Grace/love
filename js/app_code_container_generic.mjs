import { app_code_container_generic_style } from "./app_code_container_generic_style.mjs";
import { html_div } from "./html_div.mjs";
export function app_code_container_generic(parent) {
  let container = html_div(parent);
  app_code_container_generic_style(container);
  return container;
}
