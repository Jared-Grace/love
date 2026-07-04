import { html_display_inline } from "../../../love/public/src/html_display_inline.mjs";
import { app_code_container_dark } from "../../../love/public/src/app_code_container_dark.mjs";
export function app_code_container_dark_inline(parent) {
  let container = app_code_container_dark(parent);
  html_display_inline(container);
  return container;
}
